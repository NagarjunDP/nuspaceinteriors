#!/usr/bin/env scratch/venv/bin/python
import os
import json
import shutil
import hashlib
from pathlib import Path
from PIL import Image
import torch
from transformers import CLIPProcessor, CLIPModel

PUBLIC_DIR = Path("/Users/nagarjundp/coastalinterio/public")
WORK_DIR   = PUBLIC_DIR / "work"
MANIFEST   = PUBLIC_DIR.parent / "src" / "data" / "portfolio_manifest.json"

TARGET_COUNTS = {
    "living_room": 18,
    "bedroom":     18,
    "kitchen":     14,
    "dining":      11,
    "wardrobe":    11,
    "commercial":  14,
    "renovation":   9,
    "turnkey":     11,
}

PROMPTS = {
    "living_room": "a luxury living room interior with sofa, couch, TV unit, coffee table, and living space",
    "bedroom":     "a bedroom interior with bed, pillows, headboard, nightstand, and bedroom decor",
    "kitchen":     "a modular kitchen interior with kitchen cabinets, countertop, sink, stove, and chimney",
    "dining":      "a dining room interior with dining table, dining chairs, and crockery unit",
    "wardrobe":    "a walk-in wardrobe, closet with glass shutters, dressing unit, and storage cabinets",
    "commercial":  "a commercial office interior, reception desk, conference room, corporate office, or workspace",
    "renovation":  "an interior under renovation, civil work, construction, or apartment facelift",
    "turnkey":     "a full open plan living, dining and home interior space",
}

CATEGORIES = list(PROMPTS.keys())

def get_hash(p):
    h = hashlib.md5()
    with open(p, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

def main():
    print("🚀 Loading CLIP model for intelligent interior scene classification...")
    model_id = "openai/clip-vit-base-patch32"
    model = CLIPModel.from_pretrained(model_id)
    processor = CLIPProcessor.from_pretrained(model_id)
    print("✅ CLIP model loaded successfully!")

    # 1. Gather ONLY raw WhatsApp images sitting directly in public/ (not inside public/work)
    candidate_paths = sorted([
        p for p in PUBLIC_DIR.iterdir()
        if p.is_file() and p.suffix.lower() in (".jpeg", ".jpg")
    ], key=lambda p: p.stat().st_size, reverse=True)

    # Deduplicate by file hash
    seen_hashes = set()
    unique_candidates = []
    for p in candidate_paths:
        h = get_hash(p)
        if h not in seen_hashes:
            seen_hashes.add(h)
            unique_candidates.append((p, h))

    print(f"📷 Found {len(unique_candidates)} unique raw WhatsApp photos to categorize.")

    # 2. Predict category for each image using CLIP
    text_labels = [PROMPTS[cat] for cat in CATEGORIES]
    classified = {cat: [] for cat in CATEGORIES}

    print("🔍 Classifying photos into room categories using vision AI...")
    for idx, (img_path, img_hash) in enumerate(unique_candidates):
        try:
            image = Image.open(img_path).convert("RGB")
            inputs = processor(text=text_labels, images=image, return_tensors="pt", padding=True)
            with torch.no_grad():
                outputs = model(**inputs)
                logits_per_image = outputs.logits_per_image
                probs = logits_per_image.softmax(dim=1)[0]

            top_idx = torch.argmax(probs).item()
            best_cat = CATEGORIES[top_idx]
            best_score = probs[top_idx].item()

            classified[best_cat].append((best_score, img_path, img_hash))
            print(f"   [{idx+1:03d}/{len(unique_candidates)}] {img_path.name[:28]:28s} -> {best_cat:12s} ({best_score:.2f})")
        except Exception as e:
            print(f"⚠️ Error processing {img_path}: {e}")

    # 3. Sort each category's photos by confidence score descending
    for cat in CATEGORIES:
        classified[cat].sort(key=lambda x: x[0], reverse=True)

    # 4. Clean and re-create work/ directory
    if WORK_DIR.exists():
        shutil.rmtree(WORK_DIR)
    WORK_DIR.mkdir(parents=True, exist_ok=True)

    used_hashes = set()
    manifest_data = {}

    for cat in CATEGORIES:
        cat_dir = WORK_DIR / cat
        cat_dir.mkdir(parents=True, exist_ok=True)
        manifest_data[cat] = []
        target = TARGET_COUNTS[cat]

        # Select top non-duplicate photos for this category
        picks = []
        for score, img_path, h in classified[cat]:
            if h not in used_hashes and len(picks) < target:
                used_hashes.add(h)
                picks.append(img_path)

        # Fallback if category has fewer direct matches than target count
        if len(picks) < target:
            for other_cat in CATEGORIES:
                for score, img_path, h in classified[other_cat]:
                    if h not in used_hashes and len(picks) < target:
                        used_hashes.add(h)
                        picks.append(img_path)

        # Copy to work/<cat>/<cat>_01.jpeg etc.
        for i, src_path in enumerate(picks, start=1):
            dest_name = f"{cat}_{i:02d}.jpeg"
            dest_path = cat_dir / dest_name
            shutil.copy2(src_path, dest_path)
            web_path = f"/work/{cat}/{dest_name}"
            manifest_data[cat].append(web_path)

        print(f"✨ Category '{cat}': created {len(picks)} photo files in {cat_dir}")

    # 5. Save manifest
    with open(MANIFEST, "w") as f:
        json.dump(manifest_data, f, indent=2)

    print("\n🎉 ALL DONE! All category photos created on disk and manifest updated successfully.")

if __name__ == "__main__":
    main()
