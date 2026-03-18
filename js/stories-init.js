/**
 * Stories Initialization and Data
 * 
 * INSTRUCCIONES PARA AÑADIR HISTORIAS:
 * 
 * Cuando recibas una historia del formulario de Airtable, añade un objeto
 * al array STORIES con esta estructura:
 * 
 * TIPO 1 - Historia con foto:
 * {
 *     id: "AT-001",                              // Código de la foto
 *     author: "Marta R.",                         // Nombre o alias
 *     location: "Lavapiés, Madrid",               // Dónde la encontró
 *     text: "Encontré este sobre un martes...",   // Su historia
 *     image: "FOTOS PARA WEB/optimized/AT-001.jpg", // Ruta a la foto del usuario
 *     type: "image"                               // IMPORTANTE: poner "image"
 * }
 * 
 * TIPO 2 - Solo texto (nota):
 * {
 *     id: "EXP-TEXT-01",                          // Un código cualquiera
 *     author: "Anónimo",                          // Nombre o alias
 *     location: "Malasaña",                       // Dónde la encontró
 *     text: "Gracias por pararme un instante...", // Su historia
 *     type: "note"                                // IMPORTANTE: poner "note"
 * }
 * 
 * Después de añadir la historia, simplemente sube el archivo y la web 
 * se actualizará automáticamente.
 */

// === HISTORIAS PUBLICADAS ===
// Añade aquí las historias que recibas del formulario.
const STORIES = [
    // Ejemplo comentado para referencia rápida:
    // {
    //     id: "AT-001",
    //     author: "Marta R.",
    //     location: "Lavapiés, Madrid",
    //     text: "Encontré este sobre un martes de lluvia en un banco cerca del metro.",
    //     image: "FOTOS PARA WEB/optimized/AT-001.jpg",
    //     type: "image"
    // },
    // {
    //     id: "EXP-TEXT-01",
    //     author: "Anónimo",
    //     location: "Malasaña",
    //     text: "Gracias por regalar miradas.",
    //     type: "note"
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    renderStories();
});

function renderStories() {
    const grid = document.getElementById('storiesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Si no hay historias, mostrar mensaje vacío
    if (STORIES.length === 0) {
        grid.innerHTML = `
            <div class="stories-empty">
                <p class="stories-empty-title">Todavía no hay historias</p>
                <p class="stories-empty-text">Cuando alguien encuentre una de mis fotografías y quiera compartir su experiencia, aparecerá aquí.</p>
                <a href="https://airtable.com/app8HpaFiFwdBauCp/pag2ZHUTFnmZFNfmI/form" target="_blank" class="stories-empty-btn">¿Has encontrado una foto?</a>
            </div>
        `;
        return;
    }

    STORIES.forEach(story => {
        const card = document.createElement('div');
        card.className = `story-card ${story.type === 'image' ? 'with-image' : 'note-only'}`;
        
        // Random slight rotation for "mural" effect
        const rot = (Math.random() * 4) - 2;
        card.style.transform = `rotate(${rot}deg)`;

        if (story.type === 'image') {
            card.innerHTML = `
                <img src="${story.image}" alt="Historia de ${story.author}">
                <div class="note-text">${story.text.substring(0, 80)}...</div>
                <div class="note-author">— ${story.author}</div>
                <div class="story-id">${story.id} | ${story.location}</div>
            `;
            card.addEventListener('click', () => {
                if (typeof openModal === 'function') {
                    openModal(story.image, story.id, story.text, story.author);
                }
            });
        } else {
            card.innerHTML = `
                <div class="note-text">"${story.text}"</div>
                <div class="note-author">— ${story.author}</div>
                <div class="story-id">${story.location}</div>
            `;
        }

        grid.appendChild(card);
    });
}
