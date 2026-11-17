# Web personal de Josep Magraner

Portfolio estático, en inglés y español, listo para GitHub Pages.

## Verla en local

Los scripts son módulos de JavaScript, así que hace falta un servidor (abrir el archivo con doble clic no basta):

    python -m http.server 8000

y abrir http://localhost:8000.

## Publicarla

Subir el contenido de esta carpeta a la raíz del repositorio de GitHub Pages (`josepmagra.github.io`) y activar Pages en la rama principal.

## Qué hay en cada sitio

- `index.html`: portada (presentación, proyectos, sobre mí, cómo trabajo, contacto).
- `projects/`: un caso de estudio por proyecto.
- `css/site.css`: colores, tipografía y estilos propios de la web.
- `js/lang.js`: el botón EN / ES. Cada texto lleva sus dos versiones, `<span class="en">` y `<span class="es">`.
- `js/video.js`: los vídeos solo se reproducen mientras están en pantalla, y no se mueven si el visitante pidió menos movimiento.
- `media/`: los dos vídeos de las apps reales (grabados con datos de ejemplo) y sus imágenes de portada.
- `cv/`: el CV genérico en PDF, en inglés y en español.
- `img/`: la foto.
- `assets/`: las piezas del kit de taste-skill que usa la web (licencia MIT, en `assets/LICENSE-taste-skill.txt`).
