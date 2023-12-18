import os
import re

def get_last_number_used(directory_path, static_name):
    """Encuentra el último número utilizado en los nombres de archivo."""
    pattern = re.compile(rf"{re.escape(static_name)}_(\d+)")
    max_number = 0
    for filename in os.listdir(directory_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            match = pattern.search(filename)
            if match:
                number = int(match.group(1))
                max_number = max(max_number, number)
    return max_number

def rename_images_in_directory_specific(directory_path, static_name="IArtPeticiones"):
    """Renombra todas las imágenes en un directorio que no siguen el patrón especificado."""
    last_number = get_last_number_used(directory_path, static_name)
    counter = last_number + 1
    pattern = re.compile(rf"{re.escape(static_name)}_(\d+)")
    for filename in os.listdir(directory_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            if not pattern.search(filename):  # Comprobar si el archivo no sigue el patrón
                new_name = f"{static_name}_{counter}{os.path.splitext(filename)[1]}"
                os.rename(os.path.join(directory_path, filename), os.path.join(directory_path, new_name))
                print(f"Renombrado: {filename} a {new_name}")
                counter += 1

# Reemplaza '.' con la ruta a tu directorio de imágenes
rename_images_in_directory_specific('.')

