// ================================================
// GALLERY GRID FUNCTIONALITY
// Lazy loading and modal integration
// ================================================

// Gallery photos data — all 86 definitive photos
const GALLERY_PHOTOS = [
    { src: 'fotos_web/AT-001.jpg', location: 'Calles de Madrid', id: 'AT-001' },
    { src: 'fotos_web/AT-002.jpg', location: 'Calles de Madrid', id: 'AT-002' },
    { src: 'fotos_web/AT-003.jpg', location: 'Calles de Madrid', id: 'AT-003' },
    { src: 'fotos_web/AT-004.jpg', location: 'Calles de Madrid', id: 'AT-004' },
    { src: 'fotos_web/AT-005.jpg', location: 'Calles de Madrid', id: 'AT-005' },
    { src: 'fotos_web/AT-006.jpg', location: 'Calles de Madrid', id: 'AT-006' },
    { src: 'fotos_web/AT-007.jpg', location: 'Calles de Madrid', id: 'AT-007' },
    { src: 'fotos_web/AT-008.jpg', location: 'Calles de Madrid', id: 'AT-008' },
    { src: 'fotos_web/AT-009.jpg', location: 'Calles de Madrid', id: 'AT-009' },
    { src: 'fotos_web/BN-001.jpg', location: 'Calles de Madrid', id: 'BN-001' },
    { src: 'fotos_web/BN-002.jpg', location: 'Calles de Madrid', id: 'BN-002' },
    { src: 'fotos_web/BN-003.jpg', location: 'Calles de Madrid', id: 'BN-003' },
    { src: 'fotos_web/BN-004.jpg', location: 'Calles de Madrid', id: 'BN-004' },
    { src: 'fotos_web/BN-005.jpg', location: 'Calles de Madrid', id: 'BN-005' },
    { src: 'fotos_web/BN-006.jpg', location: 'Calles de Madrid', id: 'BN-006' },
    { src: 'fotos_web/BN-007.jpg', location: 'Calles de Madrid', id: 'BN-007' },
    { src: 'fotos_web/BN-008.jpg', location: 'Calles de Madrid', id: 'BN-008' },
    { src: 'fotos_web/BN-009.jpg', location: 'Calles de Madrid', id: 'BN-009' },
    { src: 'fotos_web/BN-010.jpg', location: 'Calles de Madrid', id: 'BN-010' },
    { src: 'fotos_web/BN-011.jpg', location: 'Calles de Madrid', id: 'BN-011' },
    { src: 'fotos_web/BN-012.jpg', location: 'Calles de Madrid', id: 'BN-012' },
    { src: 'fotos_web/BN-013.jpg', location: 'Calles de Madrid', id: 'BN-013' },
    { src: 'fotos_web/BN-014.jpg', location: 'Calles de Madrid', id: 'BN-014' },
    { src: 'fotos_web/BN-015.jpg', location: 'Calles de Madrid', id: 'BN-015' },
    { src: 'fotos_web/BN-016.jpg', location: 'Calles de Madrid', id: 'BN-016' },
    { src: 'fotos_web/BN-017.jpg', location: 'Calles de Madrid', id: 'BN-017' },
    { src: 'fotos_web/BN-018.jpg', location: 'Calles de Madrid', id: 'BN-018' },
    { src: 'fotos_web/BN-019.jpg', location: 'Calles de Madrid', id: 'BN-019' },
    { src: 'fotos_web/BN-020.jpg', location: 'Calles de Madrid', id: 'BN-020' },
    { src: 'fotos_web/BN-021.jpg', location: 'Calles de Madrid', id: 'BN-021' },
    { src: 'fotos_web/BN-022.jpg', location: 'Calles de Madrid', id: 'BN-022' },
    { src: 'fotos_web/BN-023.jpg', location: 'Calles de Madrid', id: 'BN-023' },
    { src: 'fotos_web/BN-024.jpg', location: 'Calles de Madrid', id: 'BN-024' },
    { src: 'fotos_web/BN-025.jpg', location: 'Calles de Madrid', id: 'BN-025' },
    { src: 'fotos_web/BN-026.jpg', location: 'Calles de Madrid', id: 'BN-026' },
    { src: 'fotos_web/BN-027.jpg', location: 'Calles de Madrid', id: 'BN-027' },
    { src: 'fotos_web/BN-028.jpg', location: 'Calles de Madrid', id: 'BN-028' },
    { src: 'fotos_web/BN-029.jpg', location: 'Calles de Madrid', id: 'BN-029' },
    { src: 'fotos_web/BN-030.jpg', location: 'Calles de Madrid', id: 'BN-030' },
    { src: 'fotos_web/BN-031.jpg', location: 'Calles de Madrid', id: 'BN-031' },
    { src: 'fotos_web/NA-001.jpg', location: 'Calles de Madrid', id: 'NA-001' },
    { src: 'fotos_web/NA-002.jpg', location: 'Calles de Madrid', id: 'NA-002' },
    { src: 'fotos_web/NA-003.jpg', location: 'Calles de Madrid', id: 'NA-003' },
    { src: 'fotos_web/NA-004.jpg', location: 'Calles de Madrid', id: 'NA-004' },
    { src: 'fotos_web/NA-005.jpg', location: 'Calles de Madrid', id: 'NA-005' },
    { src: 'fotos_web/NA-006.jpg', location: 'Calles de Madrid', id: 'NA-006' },
    { src: 'fotos_web/NA-007.jpg', location: 'Calles de Madrid', id: 'NA-007' },
    { src: 'fotos_web/NA-008.jpg', location: 'Calles de Madrid', id: 'NA-008' },
    { src: 'fotos_web/NA-009.jpg', location: 'Calles de Madrid', id: 'NA-009' },
    { src: 'fotos_web/NA-010.jpg', location: 'Calles de Madrid', id: 'NA-010' },
    { src: 'fotos_web/NA-011.jpg', location: 'Calles de Madrid', id: 'NA-011' },
    { src: 'fotos_web/NA-012.jpg', location: 'Calles de Madrid', id: 'NA-012' },
    { src: 'fotos_web/PL-001.jpg', location: 'Calles de Madrid', id: 'PL-001' },
    { src: 'fotos_web/PL-002.jpg', location: 'Calles de Madrid', id: 'PL-002' },
    { src: 'fotos_web/PL-003.jpg', location: 'Calles de Madrid', id: 'PL-003' },
    { src: 'fotos_web/PL-004.jpg', location: 'Calles de Madrid', id: 'PL-004' },
    { src: 'fotos_web/PL-005.jpg', location: 'Calles de Madrid', id: 'PL-005' },
    { src: 'fotos_web/PL-006.jpg', location: 'Calles de Madrid', id: 'PL-006' },
    { src: 'fotos_web/PL-007.jpg', location: 'Calles de Madrid', id: 'PL-007' },
    { src: 'fotos_web/UR-001.jpg', location: 'Calles de Madrid', id: 'UR-001' },
    { src: 'fotos_web/UR-002.jpg', location: 'Calles de Madrid', id: 'UR-002' },
    { src: 'fotos_web/UR-003.jpg', location: 'Calles de Madrid', id: 'UR-003' },
    { src: 'fotos_web/UR-004.jpg', location: 'Calles de Madrid', id: 'UR-004' },
    { src: 'fotos_web/UR-005.jpg', location: 'Calles de Madrid', id: 'UR-005' },
    { src: 'fotos_web/UR-006.jpg', location: 'Calles de Madrid', id: 'UR-006' },
    { src: 'fotos_web/UR-007.jpg', location: 'Calles de Madrid', id: 'UR-007' },
    { src: 'fotos_web/UR-008.jpg', location: 'Calles de Madrid', id: 'UR-008' },
    { src: 'fotos_web/UR-009.jpg', location: 'Calles de Madrid', id: 'UR-009' },
    { src: 'fotos_web/UR-010.jpg', location: 'Calles de Madrid', id: 'UR-010' },
    { src: 'fotos_web/UR-011.jpg', location: 'Calles de Madrid', id: 'UR-011' },
    { src: 'fotos_web/UR-012.jpg', location: 'Calles de Madrid', id: 'UR-012' },
    { src: 'fotos_web/UR-013.jpg', location: 'Calles de Madrid', id: 'UR-013' },
    { src: 'fotos_web/UR-014.jpg', location: 'Calles de Madrid', id: 'UR-014' },
    { src: 'fotos_web/UR-015.jpg', location: 'Calles de Madrid', id: 'UR-015' },
    { src: 'fotos_web/UR-016.jpg', location: 'Calles de Madrid', id: 'UR-016' },
    { src: 'fotos_web/UR-017.jpg', location: 'Calles de Madrid', id: 'UR-017' },
    { src: 'fotos_web/UR-018.jpg', location: 'Calles de Madrid', id: 'UR-018' },
    { src: 'fotos_web/UR-019.jpg', location: 'Calles de Madrid', id: 'UR-019' },
    { src: 'fotos_web/UR-020.jpg', location: 'Calles de Madrid', id: 'UR-020' },
    { src: 'fotos_web/UR-021.jpg', location: 'Calles de Madrid', id: 'UR-021' },
    { src: 'fotos_web/UR-022.jpg', location: 'Calles de Madrid', id: 'UR-022' },
    { src: 'fotos_web/UR-023.jpg', location: 'Calles de Madrid', id: 'UR-023' },
    { src: 'fotos_web/UR-024.jpg', location: 'Calles de Madrid', id: 'UR-024' },
    { src: 'fotos_web/UR-025.jpg', location: 'Calles de Madrid', id: 'UR-025' },
    { src: 'fotos_web/UR-026.jpg', location: 'Calles de Madrid', id: 'UR-026' },
    { src: 'fotos_web/UR-027.jpg', location: 'Calles de Madrid', id: 'UR-027' },
];

document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});

function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    GALLERY_PHOTOS.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.photo = photo.id;
        
        item.innerHTML = `
            <img src="${photo.src}" alt="Fotografía ${photo.id}" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-location">${photo.id}</span>
            </div>
        `;
        
        item.addEventListener('click', () => {
            openModal(photo.src, photo.id);
        });
        
        grid.appendChild(item);
    });
}
