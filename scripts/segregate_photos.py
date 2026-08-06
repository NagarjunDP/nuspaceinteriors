#!/usr/bin/env python3
"""
Nuspace Decor — Photo Segregator
Reads WhatsApp images from public/, deduplicates using MD5 hashing,
selects the best 117 photos, and populates the 9 categories according to the requested counts:
- living_room: 18
- bedroom: 18
- kitchen: 14
- bathroom: 11
- dining: 11
- wardrobe: 11
- commercial: 14
- renovation: 9
- turnkey: 11
(Residential category removed)
"""

import os
import shutil
import hashlib
import json
from pathlib import Path

PUBLIC_DIR   = Path("/Users/nagarjundp/coastalinterio/public")
OUT_BASE     = PUBLIC_DIR / "work"
MIN_SIZE_KB  = 45

# Target counts per category matching user request:
TARGET_COUNTS = {
    "living_room": 18,
    "bedroom":     18,
    "kitchen":     14,
    "bathroom":    11,
    "dining":      11,
    "wardrobe":    11,
    "commercial":  14,
    "renovation":   9,
    "turnkey":     11,
}

def get_file_hash(path):
    """MD5 hash to detect exact duplicates."""
    h = hashlib.md5()
    with open(path, "rb") as f:
        while chunk := f.read(8192):
            h.update(chunk)
    return h.hexdigest()

def main():
    print("🔍 Scanning public/ for WhatsApp images …")
    all_jpegs = sorted(
        [p for p in PUBLIC_DIR.iterdir() if p.suffix.lower() in (".jpeg", ".jpg")],
        key=lambda p: p.stat().st_size,
        reverse=True,
    )
    print(f"   Found {len(all_jpegs)} jpeg files")

    # 1. Filter by minimum size
    filtered = [p for p in all_jpegs if p.stat().st_size >= MIN_SIZE_KB * 1024]
    print(f"   After size filter (>= {MIN_SIZE_KB}KB): {len(filtered)} files")

    # 2. Deduplicate by exact hash
    seen_hashes = set()
    unique = []
    for p in filtered:
        h = get_file_hash(p)
        if h not in seen_hashes:
            seen_hashes.add(h)
            unique.append(p)
    print(f"   After dedup: {len(unique)} unique files")

    total_target = sum(TARGET_COUNTS.values())
    if len(unique) < total_target:
        print(f"⚠️ Warning: Found {len(unique)} files, needed {total_target}. Will distribute available.")
        selected = unique
    else:
        selected = unique[:total_target]

    print(f"   Selected top {len(selected)} photos for portfolio.")

    # 3. Clean destination folder OUT_BASE
    if OUT_BASE.exists():
        shutil.rmtree(OUT_BASE)
    OUT_BASE.mkdir(parents=True, exist_ok=True)

    # 4. Distribute into categories according to target counts
    manifest = {}
    photo_idx = 0

    for bucket, count in TARGET_COUNTS.items():
        bucket_dir = OUT_BASE / bucket
        bucket_dir.mkdir(parents=True, exist_ok=True)
        manifest[bucket] = []

        for i in range(1, count + 1):
            if photo_idx >= len(selected):
                break
            photo = selected[photo_idx]
            photo_idx += 1

            ext = photo.suffix.lower()
            new_name = f"{bucket}_{i:02d}{ext}"
            dest = bucket_dir / new_name
            shutil.copy2(photo, dest)

            web_path = f"/work/{bucket}/{new_name}"
            manifest[bucket].append(web_path)

    # 5. Save manifest JSON
    manifest_path = PUBLIC_DIR.parent / "src" / "data" / "portfolio_manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"\n✅ Done! Manifest saved to: {manifest_path}")
    for bucket, paths in manifest.items():
        print(f"   {bucket:20s}: {len(paths)} photos")

if __name__ == "__main__":
    main()
