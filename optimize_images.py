import os
import re
import random
from PIL import Image
from PIL.ExifTags import TAGS

def get_exif_data(img):
    exif_data = {}
    try:
        raw_exif = img.getexif()
        if raw_exif:
            for tag_id, value in raw_exif.items():
                tag = TAGS.get(tag_id, tag_id)
                if isinstance(value, bytes):
                    try:
                        value = value.decode('utf-8')
                    except:
                        value = str(value)
                exif_data[tag] = value
                
            if hasattr(raw_exif, 'get_ifd'):
                exif_ifd = raw_exif.get_ifd(0x8769)
                for tag_id, value in exif_ifd.items():
                    tag = TAGS.get(tag_id, tag_id)
                    exif_data[tag] = value
    except Exception as e:
        pass
    return exif_data

def format_shutter(exposure_time):
    if not exposure_time: return "1/200s"
    try:
        if isinstance(exposure_time, (tuple, list)):
            if exposure_time[0] == 0: return "1/200s"
            val = exposure_time[0] / exposure_time[1]
        else:
            val = float(exposure_time)
            
        if val >= 1: return f"{round(val, 1)}s"
        else: return f"1/{int(round(1/val))}s"
    except: return str(exposure_time) + "s"

def format_aperture(f_number):
    if not f_number: return "f/5.6"
    try:
        if isinstance(f_number, (tuple, list)):
            val = f_number[0] / f_number[1]
        else:
            val = float(f_number)
        return f"f/{round(val, 1)}"
    except: return f"f/{f_number}"

input_folder = "FOTOS DEFINITIVAS/bundle"
output_folder = "fotos_web"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

js_photo_data_lines = []
js_gallery_photos_lines = []
html_draggables = []
film_strip_frames = []

# List files and sort
files = [f for f in os.listdir(input_folder) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
files.sort()

camera = "Olympus OM-D E-M10 Mark II"
lens = "M.Zuiko 14-42mm f/3.5-5.6"

processed_files = []

print(f"Iniciando optimización de {len(files)} fotos...")

for idx, filename in enumerate(files):
    input_path = os.path.join(input_folder, filename)
    # Output always as .jpg for consistency
    photo_id = os.path.splitext(filename)[0]
    output_filename = f"{photo_id}.jpg"
    output_path = os.path.join(output_folder, output_filename)
    
    try:
        with Image.open(input_path) as img:
            exif = get_exif_data(img)
            iso = exif.get('ISOSpeedRatings', "400")
            if isinstance(iso, (list, tuple)): iso = iso[0]
                
            aperture = format_aperture(exif.get('FNumber', None))
            shutter = format_shutter(exif.get('ExposureTime', None))
            date_raw = exif.get('DateTimeOriginal', exif.get('DateTime', '2024'))
            date_year = date_raw.split(':')[0] if isinstance(date_raw, str) and ':' in date_raw else "2024"
            location = "Calles de Madrid" 
            
            # JS Arrays (using the new output folder)
            js_photo_data_lines.append(f"    '{photo_id}': {{ location: '{location}', iso: {iso}, aperture: '{aperture}', shutter: '{shutter}', date: '{date_year}', camera: '{camera}', lens: '{lens}' }},")
            js_gallery_photos_lines.append(f"    {{ src: '{output_folder}/{output_filename}', location: '{location}', id: '{photo_id}' }},")
            
            # HTML Draggables (limit to 20 for the home mural)
            if idx < 20:
                html_draggables.append(f'            <div class="photo-draggable" data-photo="{photo_id}">')
                html_draggables.append(f'                <img src="{output_folder}/{output_filename}" alt="Fotografía urbana Madrid" loading="lazy">')
                html_draggables.append(f'            </div>')
            
            processed_files.append((photo_id, output_filename))
            
            # Optimize image
            max_width = 1200
            if img.mode in ('RGBA', 'LA', 'P'): img = img.convert('RGB')
            if img.width > max_width:
                ratio = max_width / img.width
                img = img.resize((max_width, int(img.height * ratio)), Image.Resampling.LANCZOS)
                
            img.save(output_path, 'JPEG', quality=85, optimize=True)
            print(f"[{photo_id}] Procesada -> {output_filename}")
            
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Build Final Strings
photo_data_str = "const PHOTO_DATA = {\n" + "\n".join(js_photo_data_lines) + "\n};"
gallery_photos_str = "const GALLERY_PHOTOS = [\n" + "\n".join(js_gallery_photos_lines) + "\n];"
draggables_str = "\n".join(html_draggables)

# Select random 6 for film strip
film_selection = random.sample(processed_files, min(6, len(processed_files)))
for pid, fname in film_selection:
    film_strip_frames.append(f'                    <div class="frame" data-target="{pid}"><img src="{output_folder}/{fname}" alt=""></div>')
film_strip_str = "\n".join(film_strip_frames)

# INJECT INTO FILES

# 1. Inject into main.js
try:
    with open('main.js', 'r', encoding='utf-8') as f: content = f.read()
    content = re.sub(r'const PHOTO_DATA = \{.*?\};', photo_data_str, content, flags=re.DOTALL)
    with open('main.js', 'w', encoding='utf-8') as f: f.write(content)
    print("- main.js actualizado")
except Exception as e: print("Error main.js:", e)

# 2. Inject into js/gallery-init.js
try:
    with open('js/gallery-init.js', 'r', encoding='utf-8') as f: content = f.read()
    content = re.sub(r'const GALLERY_PHOTOS = \[.*?\];', gallery_photos_str, content, flags=re.DOTALL)
    with open('js/gallery-init.js', 'w', encoding='utf-8') as f: f.write(content)
    print("- js/gallery-init.js actualizado")
except Exception as e: print("Error gallery-init.js:", e)

# 3. Inject into index.html
try:
    with open('index.html', 'r', encoding='utf-8') as f: content = f.read()
    # Replace Photos Canvas
    # Match between <div class="photos-canvas" id="photosCanvas"> and </div> before the film strip comment
    pattern_canvas = re.compile(r'(<div class="photos-canvas" id="photosCanvas">).*?(</div>\s*<!-- 35mm Film Strip)', re.DOTALL)
    if pattern_canvas.search(content):
        content = pattern_canvas.sub(r'\1\n' + draggables_str + r'\n        \2', content)
        print("- index.html (canvas) actualizado")
    
    # Replace Film Strip frames inside <div class="film-frames" id="filmFramesContainer">
    pattern_film = re.compile(r'(<div class="film-frames" id="filmFramesContainer">).*?(</div>\s*</div>\s*</div>)', re.DOTALL)
    if pattern_film.search(content):
        # We need to be careful with the nesting. Let's try matching the inner content.
        # Actually, let's look for the perforations
        pattern_film_v2 = re.compile(r'(<div class="film-perforations top"></div>).*?(</div>\s*</div>\s*</div>)', re.DOTALL)
        content = pattern_film_v2.sub(r'\1\n' + film_strip_str + r'\n                \2', content)
        print("- index.html (film strip) actualizado")
    
    with open('index.html', 'w', encoding='utf-8') as f: f.write(content)
except Exception as e: print("Error index.html:", e)

print("\n✓ PROCESO COMPLETADO EXITO! Tu web ya está usando los nombres nuevos.")
