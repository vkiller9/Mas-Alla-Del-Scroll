// ================================================
// INTERACTIVE MAP WITH LEAFLET
// Minimalist brutalist design
// ================================================

// Photo locations in Madrid (generic coordinates)
const PHOTO_LOCATIONS = [
    { lat: 40.4200, lng: -3.7050, name: "Gran Vía", photoId: 1 },
    { lat: 40.4215, lng: -3.7077, name: "Malasaña", photoId: 2 },
    { lat: 40.4153, lng: -3.7074, name: "Retiro", photoId: 3 },
    { lat: 40.4089, lng: -3.6920, name: "Lavapiés", photoId: 4 },
    { lat: 40.4238, lng: -3.6992, name: "Chueca", photoId: 5 },
    { lat: 40.4140, lng: -3.7140, name: "La Latina", photoId: 6 },
    { lat: 40.4168, lng: -3.7038, name: "Sol", photoId: 7 },
    { lat: 40.4310, lng: -3.7005, name: "Chamberí", photoId: 8 },
    { lat: 40.4068, lng: -3.6920, name: "Atocha", photoId: 9 },
    { lat: 40.4379, lng: -3.7155, name: "Moncloa", photoId: 10 },
    { lat: 40.4298, lng: -3.7186, name: "Argüelles", photoId: 11 },
    { lat: 40.4154, lng: -3.7077, name: "Plaza Mayor", photoId: 12 },
    { lat: 40.4200, lng: -3.7030, name: "Callao", photoId: 13 },
    { lat: 40.4180, lng: -3.7120, name: "Ópera", photoId: 14 },
    { lat: 40.4260, lng: -3.7010, name: "Tribunal", photoId: 15 },
    { lat: 40.4280, lng: -3.7100, name: "Noviciado", photoId: 16 },
    { lat: 40.4320, lng: -3.7050, name: "San Bernardo", photoId: 17 },
    { lat: 40.4350, lng: -3.7080, name: "Quevedo", photoId: 18 },
    { lat: 40.4290, lng: -3.6980, name: "Bilbao", photoId: 19 },
    { lat: 40.4250, lng: -3.6950, name: "Alonso Martínez", photoId: 20 },
];

// Initialize map
function initializeMap() {
    const mapElement = document.getElementById('photoMap');
    if (!mapElement) return;

    // Create map centered on Madrid
    const map = L.map('photoMap', {
        center: [40.4168, -3.7038], // Madrid center
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true,
    });

    // Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 18,
    }).addTo(map);

    // Custom marker icon (minimalist)
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    });

    // Add markers for each photo location
    PHOTO_LOCATIONS.forEach(location => {
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
            .addTo(map);

        // Removed popup on hover as requested


        // Click to open photo modal
        marker.on('click', () => {
            const photoData = PHOTO_DATA[location.photoId];
            if (photoData) {
                // Find the photo element
                const photoElement = document.querySelector(`[data-photo="${location.photoId}"]`);
                if (photoElement) {
                    const img = photoElement.querySelector('img');
                    if (img) {
                        openModal(img.src, location.photoId);
                    }
                }
            }
        });
    });
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for Leaflet to load
    setTimeout(() => {
        if (typeof L !== 'undefined') {
            initializeMap();
        }
    }, 500);
});
