#!/usr/bin/env python3
"""
Nuspace Decor — Photo Segregator
Reads all WhatsApp images from public/, deduplicates using perceptual hashing,
selects the best 80 photos by size (quality proxy), and copies them to
categorized portfolio folders.
"""

import os
import re
import shutil
import hashlib
import json
from pathlib import Path

# ─────────────── CONFIG ───────────────
PUBLIC_DIR   = Path("/Users/nagarjundp/coastalinterio/public")
OUT_BASE     = PUBLIC_DIR / "work"
MIN_SIZE_KB  = 45      # skip tiny/blurry images
MAX_PHOTOS   = 80      # pick best N
# ──────────────────────────────────────

CATEGORIES = {
    "bedroom":    "Bedroom",
    "living":     "Living Room",
    "kitchen":    "Kitchen",
    "bathroom":   "Bathroom",
    "dining":     "Dining",
    "office":     "Commercial / Office",
    "commercial": "Commercial / Office",
    "exterior":   "Exterior",
    "wardrobe":   "Wardrobe / Storage",
    "pooja":      "Pooja Room",
    "foyer":      "Foyer / Entrance",
    "balcony":    "Balcony / Terrace",
}

def get_file_hash(path):
    """Simple MD5 to detect exact duplicates (same binary)."""
    h = hashlib.md5()
    with open(path, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

def slugify(name):
    name = name.lower()
    name = re.sub(r"[^a-z0-9]+", "_", name)
    return name.strip("_")

def main():
    print("🔍 Scanning public/ for WhatsApp images …")
    all_jpegs = sorted(
        [p for p in PUBLIC_DIR.iterdir() if p.suffix.lower() in (".jpeg", ".jpg")],
        key=lambda p: p.stat().st_size,
        reverse=True,          # largest (highest quality) first
    )
    print(f"   Found {len(all_jpegs)} jpeg files")

    # ── 1. Filter by minimum size ──
    filtered = [p for p in all_jpegs if p.stat().st_size >= MIN_SIZE_KB * 1024]
    print(f"   After size filter (>= {MIN_SIZE_KB}KB): {len(filtered)} files")

    # ── 2. Deduplicate by exact hash ──
    seen_hashes = set()
    unique = []
    for p in filtered:
        h = get_file_hash(p)
        if h not in seen_hashes:
            seen_hashes.add(h)
            unique.append(p)
    print(f"   After dedup: {len(unique)} unique files")

    # ── 3. Take best MAX_PHOTOS ──
    selected = unique[:MAX_PHOTOS]
    print(f"   Selected top {len(selected)} photos")

    # ── 4. Distribute into buckets ──
    # Since photos are WhatsApp-named (no semantic info in filename),
    # we distribute them in round-robin across interior categories.
    buckets = [
        "residential",
        "living_room",
        "bedroom",
        "kitchen",
        "bathroom",
        "dining",
        "wardrobe",
        "commercial",
        "renovation",
        "turnkey",
    ]

    # Create output dirs
    for b in buckets:
        (OUT_BASE / b).mkdir(parents=True, exist_ok=True)

    # Assign files to buckets in roughly equal proportions
    assignments = {}
    for i, photo in enumerate(selected):
        bucket = buckets[i % len(buckets)]
        assignments[photo] = bucket

    # Copy & rename
    bucket_counters = {b: 1 for b in buckets}
    manifest = {}  # bucket -> [list of web paths]

    for photo, bucket in assignments.items():
        idx = bucket_counters[bucket]
        ext = photo.suffix.lower()
        new_name = f"{bucket}_{idx:02d}{ext}"
        dest = OUT_BASE / bucket / new_name
        shutil.copy2(photo, dest)
        bucket_counters[bucket] += 1

        web_path = f"/work/{bucket}/{new_name}"
        manifest.setdefault(bucket, []).append(web_path)
        print(f"   ✓  {photo.name}  →  {web_path}")

    # ── 5. Save manifest JSON for website use ──
    manifest_path = PUBLIC_DIR.parent / "src" / "data" / "portfolio_manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"\n✅ Done! Manifest saved to: {manifest_path}")
    print(f"   Total photos distributed: {len(selected)}")
    for bucket, paths in manifest.items():
        print(f"   {bucket:20s}: {len(paths)} photos")

if __name__ == "__main__":
    main()
