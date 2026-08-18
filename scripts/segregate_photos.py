#!/usr/bin/env python3
"""
Nuspace Decor — AI Photo Classifier with Perceptual Visual Deduplication
1. Uses OpenAI CLIP vision model for strict Winner-Takes-All room classification.
2. Uses CLIP feature embeddings to detect and remove near-duplicate/repeated photos of the same room.
3. Populates public/work/<category>/ and updates src/data/portfolio_manifest.json.
"""

import os
import shutil
import hashlib
import json
from pathlib import Path
from PIL import Image
import torch
from transformers import CLIPProcessor, CLIPModel

PUBLIC_DIR = Path("/Users/nagarjundp/coastalinterio/public")
OUT_BASE   = PUBLIC_DIR / "work"
MANIFEST   = PUBLIC_DIR.parent / "src" / "data" / "portfolio_manifest.json"
MIN_SIZE_KB = 35
SIMILARITY_THRESHOLD = 0.88  # Perceptual similarity threshold to filter near-duplicates

CATEGORIES = {
    "living_room": [
        "a living room interior with a sofa, couch, TV wall unit, coffee table, and living hall seating",
        "a luxury living room hall, lounge area, media console, and false ceiling with lights",
        "a residential living space with sofa set and TV unit"
    ],
    "bedroom": [
        "a bedroom interior with a bed, mattress, headboard, pillows, nightstand, and bedroom decor",
        "a master bedroom or guest bedroom with bed frame, side tables, and bedroom backdrop"
    ],
    "kitchen": [
        "a modular kitchen interior with kitchen cabinets, quartz countertop, chimney, gas stove, sink, and backsplash",
        "a modern kitchen with storage drawers, overhead cabinets, and cooking area"
    ],

    "wardrobe": [
        "a bedroom wardrobe, closet, sliding doors, walk-in wardrobe, dressing unit, or vanity mirror",
        "custom fitted wardrobes with glass or wooden shutters and clothes storage"
    ],
    "commercial": [
        "a commercial office, reception desk, workstation desks, corporate office room, conference table, or office lobby",
        "a commercial office space, workspace interior, or commercial retail interior"
    ],
    "renovation": [
        "an interior under renovation, ongoing civil work, unpainted brick walls, gypsum false ceiling metal framework, construction site, or scaffolding",
        "home renovation in progress with raw site work, civil demolition, or exposed plaster"
    ],
    "turnkey": [
        "a full turnkey apartment interior, open layout view of living hall and dining together",
        "an expansive open plan home interior showing connected living, dining, and foyer spaces"
    ]
}

def get_hash(path):
    h = hashlib.md5()
    with open(path, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

def main():
    print("🚀 Initializing AI Vision Classifier & Deduplicator...")
    model_id = "openai/clip-vit-base-patch32"
    model = CLIPModel.from_pretrained(model_id)
    processor = CLIPProcessor.from_pretrained(model_id)
    print("✅ CLIP Model Loaded.")

    cat_keys = list(CATEGORIES.keys())
    all_prompts = []
    prompt_to_cat = []

    for cat in cat_keys:
        for prompt in CATEGORIES[cat]:
            all_prompts.append(prompt)
            prompt_to_cat.append(cat)

    print("🔍 Gathering raw candidate photos...")
    raw_files = sorted(
        [p for p in PUBLIC_DIR.rglob("*") 
         if p.is_file() and p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp")
         and "work" not in p.relative_to(PUBLIC_DIR).parts
         and "images/partners" not in str(p) 
         and "assets" not in str(p)],
        key=lambda p: p.stat().st_size,
        reverse=True
    )

    seen_hashes = set()
    unique_candidates = []
    for p in raw_files:
        if p.stat().st_size < MIN_SIZE_KB * 1024:
            continue
        try:
            h = get_hash(p)
            if h not in seen_hashes:
                seen_hashes.add(h)
                unique_candidates.append((p, h))
        except Exception:
            pass

    print(f"📷 Classifying and extracting visual features for {len(unique_candidates)} raw photos...")
    classified = {cat: [] for cat in cat_keys}

    for idx, (img_path, img_hash) in enumerate(unique_candidates, start=1):
        try:
            image = Image.open(img_path).convert("RGB")
            inputs = processor(text=all_prompts, images=image, return_tensors="pt", padding=True)
            with torch.no_grad():
                outputs = model(**inputs)
                logits = outputs.logits_per_image[0]
                
                # Image features tensor for perceptual deduplication
                img_inputs = processor(images=image, return_tensors="pt")
                res = model.get_image_features(**img_inputs)
                tensor = res.pooler_output if hasattr(res, "pooler_output") else res[0]
                norm_feat = tensor / torch.norm(tensor, p=2, dim=-1, keepdim=True)
                
                cat_scores = {cat: -999.0 for cat in cat_keys}
                for p_idx, score in enumerate(logits):
                    c = prompt_to_cat[p_idx]
                    val = score.item()
                    if val > cat_scores[c]:
                        cat_scores[c] = val

            best_cat = max(cat_scores, key=cat_scores.get)
            best_score = cat_scores[best_cat]
            classified[best_cat].append((best_score, norm_feat, img_path))
            
            if idx % 50 == 0 or idx == len(unique_candidates):
                print(f"   Processed [{idx}/{len(unique_candidates)}] photos...")

        except Exception as e:
            print(f"⚠️ Error processing {img_path.name}: {e}")

    # Clean and re-create public/work/ directory
    if OUT_BASE.exists():
        shutil.rmtree(OUT_BASE)
    OUT_BASE.mkdir(parents=True, exist_ok=True)

    manifest_data = {}
    total_organized = 0
    MAX_PER_CAT = 18

    for cat in cat_keys:
        cat_dir = OUT_BASE / cat
        cat_dir.mkdir(parents=True, exist_ok=True)
        manifest_data[cat] = []

        # Sort this category's winning photos by score descending
        classified[cat].sort(key=lambda x: x[0], reverse=True)

        selected_photos = []
        selected_feats = []

        for score, feat, src_path in classified[cat]:
            if len(selected_photos) >= MAX_PER_CAT:
                break
            
            # Check perceptual similarity against already selected photos in this category
            is_near_dup = False
            for prev_feat in selected_feats:
                sim = (feat @ prev_feat.T).item()
                if sim >= SIMILARITY_THRESHOLD:
                    is_near_dup = True
                    print(f"   [Deduplicated] Skipped near-repeat photo in {cat}: {src_path.name} (similarity {sim:.3f})")
                    break
            
            if not is_near_dup:
                selected_photos.append(src_path)
                selected_feats.append(feat)

        for i, src_path in enumerate(selected_photos, start=1):
            ext = src_path.suffix.lower()
            if ext == ".jpg":
                ext = ".jpeg"
            dest_name = f"{cat}_{i:02d}{ext}"
            dest_path = cat_dir / dest_name
            shutil.copy2(src_path, dest_path)

            web_path = f"/work/{cat}/{dest_name}"
            manifest_data[cat].append(web_path)
            total_organized += 1

        print(f"✨ Category '{cat:15s}': saved {len(selected_photos)} unique photos to {cat_dir}")

    # Save manifest JSON
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    with open(MANIFEST, "w") as f:
        json.dump(manifest_data, f, indent=2)

    print(f"\n🎉 Done! Filtered near-duplicates & populated {total_organized} unique photos!")
    print(f"📁 Manifest updated: {MANIFEST}")

if __name__ == "__main__":
    main()
