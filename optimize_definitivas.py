"""
Optimize definitive photos for the web.
Skips already-optimized files.
"""
import os
from PIL import Image

# Increase pixel limit for very large images
Image.MAX_IMAGE_PIXELS = 200_000_000

SOURCE = os.path.join("Fotos definitivas", "bundle")
DEST = os.path.join("FOTOS PARA WEB", "optimized")
MAX_WIDTH = 1200
QUALITY = 75

os.makedirs(DEST, exist_ok=True)

files = sorted([f for f in os.listdir(SOURCE) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
print(f"Found {len(files)} photos total")

done = 0
skipped = 0
for i, fname in enumerate(files, 1):
    out_name = os.path.splitext(fname)[0] + ".jpg"
    dst_path = os.path.join(DEST, out_name)
    
    # Skip if already optimized
    if os.path.exists(dst_path) and os.path.getsize(dst_path) > 1000:
        skipped += 1
        continue
    
    src_path = os.path.join(SOURCE, fname)
    try:
        img = Image.open(src_path)
        img = img.convert("RGB")
        w, h = img.size
        if w > MAX_WIDTH:
            ratio = MAX_WIDTH / w
            new_h = int(h * ratio)
            img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)
        img.save(dst_path, "JPEG", quality=QUALITY, optimize=True)
        size_kb = os.path.getsize(dst_path) / 1024
        done += 1
        print(f"  [{i}/{len(files)}] {out_name} -> {size_kb:.0f} KB")
    except Exception as e:
        print(f"  [{i}/{len(files)}] ERROR {fname}: {e}")

print(f"\nDone! {done} new, {skipped} skipped.")
