// ================================================
// FOTOS EN LA CALLE - Physical Gallery Edition
// Draggable Photos + Heterogeneous Frames + Interactive Film Strip
// Victor De Dompablo - v9.5
// ================================================

// ===== CONFIGURATION =====
const PHOTO_DATA = {
    'AT-001': { location: 'Calles de Madrid', iso: 0, aperture: 'f/5.6', shutter: '1.0s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-002': { location: 'Calles de Madrid', iso: 200, aperture: 'f/4.8', shutter: '1/2000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-003': { location: 'Calles de Madrid', iso: 200, aperture: 'f/9.0', shutter: '1/2500s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-004': { location: 'Calles de Madrid', iso: 200, aperture: 'f/9.0', shutter: '1/500s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-005': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/1600s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-006': { location: 'Calles de Madrid', iso: 100, aperture: 'f/20.0', shutter: '1/2000s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-007': { location: 'Calles de Madrid', iso: 100, aperture: 'f/8.0', shutter: '1/320s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-008': { location: 'Calles de Madrid', iso: 100, aperture: 'f/11.0', shutter: '1/1000s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'AT-009': { location: 'Calles de Madrid', iso: 250, aperture: 'f/4.8', shutter: '1/16000s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-001': { location: 'Calles de Madrid', iso: 250, aperture: 'f/3.5', shutter: '1/30s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-002': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/640s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-003': { location: 'Calles de Madrid', iso: 200, aperture: 'f/4.8', shutter: '1/3200s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-004': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/80s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-005': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/4000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-006': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/2000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-007': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/1000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-008': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/1000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-009': { location: 'Calles de Madrid', iso: 200, aperture: 'f/4.8', shutter: '1/2000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-010': { location: 'Calles de Madrid', iso: 100, aperture: 'f/5.6', shutter: '1/320s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-011': { location: 'Calles de Madrid', iso: 250, aperture: 'f/6.7', shutter: '1/640s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-012': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/2500s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-013': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/2000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-014': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/640s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-015': { location: 'Calles de Madrid', iso: 250, aperture: 'f/8.0', shutter: '1/2000s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-016': { location: 'Calles de Madrid', iso: 100, aperture: 'f/18.0', shutter: '1/2s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-017': { location: 'Calles de Madrid', iso: 100, aperture: 'f/4.0', shutter: '1/20s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-018': { location: 'Calles de Madrid', iso: 200, aperture: 'f/10.0', shutter: '1/2s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-019': { location: 'Calles de Madrid', iso: 200, aperture: 'f/10.0', shutter: '1.0s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-020': { location: 'Calles de Madrid', iso: 200, aperture: 'f/3.5', shutter: '1/6s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-021': { location: 'Calles de Madrid', iso: 100, aperture: 'f/6.3', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-022': { location: 'Calles de Madrid', iso: 200, aperture: 'f/6.7', shutter: '1/1250s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-023': { location: 'Calles de Madrid', iso: 200, aperture: 'f/14.0', shutter: '1.3s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-024': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '3.2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-025': { location: 'Calles de Madrid', iso: 100, aperture: 'f/5.6', shutter: '1.0s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-026': { location: 'Calles de Madrid', iso: 100, aperture: 'f/4.5', shutter: '1/1s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-027': { location: 'Calles de Madrid', iso: 100, aperture: 'f/11.0', shutter: '1.0s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-028': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.0', shutter: '1/25s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-029': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '1/8s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-030': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '1/8s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'BN-031': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '1/1s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-001': { location: 'Calles de Madrid', iso: 200, aperture: 'f/14.0', shutter: '1/4s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-002': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/640s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-003': { location: 'Calles de Madrid', iso: 250, aperture: 'f/5.6', shutter: '1/400s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-004': { location: 'Calles de Madrid', iso: 100, aperture: 'f/16.0', shutter: '1/6s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-005': { location: 'Calles de Madrid', iso: 200, aperture: 'f/4.0', shutter: '1/1250s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-006': { location: 'Calles de Madrid', iso: 250, aperture: 'f/6.7', shutter: '1/1000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-007': { location: 'Calles de Madrid', iso: 200, aperture: 'f/7.1', shutter: '20.0s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-008': { location: 'Calles de Madrid', iso: 250, aperture: 'f/8.0', shutter: '1/1000s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-009': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/640s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-010': { location: 'Calles de Madrid', iso: 250, aperture: 'f/7.1', shutter: '1/640s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-011': { location: 'Calles de Madrid', iso: 400, aperture: 'f/4.0', shutter: '1/320s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'NA-012': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/1600s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-001': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/1250s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-002': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.3', shutter: '1/1250s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-003': { location: 'Calles de Madrid', iso: 200, aperture: 'f/7.1', shutter: '1/1000s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-004': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/2500s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-005': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/500s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-006': { location: 'Calles de Madrid', iso: 400, aperture: 'f/5.6', shutter: '1/320s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'PL-007': { location: 'Calles de Madrid', iso: 200, aperture: 'f/8.0', shutter: '1/1000s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-001': { location: 'Calles de Madrid', iso: 0, aperture: 'f/5.6', shutter: '1.0s', date: '2021', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-002': { location: 'Calles de Madrid', iso: 320, aperture: 'f/6.3', shutter: '1/800s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-003': { location: 'Calles de Madrid', iso: 200, aperture: 'f/4.8', shutter: '1/1600s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-004': { location: 'Calles de Madrid', iso: 200, aperture: 'f/7.1', shutter: '1/1s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-005': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/2s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-006': { location: 'Calles de Madrid', iso: 200, aperture: 'f/9.0', shutter: '2.0s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-007': { location: 'Calles de Madrid', iso: 250, aperture: 'f/7.1', shutter: '1/640s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-008': { location: 'Calles de Madrid', iso: 250, aperture: 'f/5.6', shutter: '1/640s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-009': { location: 'Calles de Madrid', iso: 250, aperture: 'f/5.6', shutter: '1/1000s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-010': { location: 'Calles de Madrid', iso: 100, aperture: 'f/22.0', shutter: '1/6s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-011': { location: 'Calles de Madrid', iso: 200, aperture: 'f/7.1', shutter: '1/500s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-012': { location: 'Calles de Madrid', iso: 200, aperture: 'f/6.7', shutter: '1/800s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-013': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-014': { location: 'Calles de Madrid', iso: 200, aperture: 'f/13.0', shutter: '1/3s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-015': { location: 'Calles de Madrid', iso: 200, aperture: 'f/14.0', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-016': { location: 'Calles de Madrid', iso: 200, aperture: 'f/9.0', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-017': { location: 'Calles de Madrid', iso: 200, aperture: 'f/9.0', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-018': { location: 'Calles de Madrid', iso: 200, aperture: 'f/7.1', shutter: '1/2s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-019': { location: 'Calles de Madrid', iso: 250, aperture: 'f/4.0', shutter: '1/1600s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-020': { location: 'Calles de Madrid', iso: 200, aperture: 'f/5.6', shutter: '1/1600s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-021': { location: 'Calles de Madrid', iso: 250, aperture: 'f/5.6', shutter: '1/500s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-022': { location: 'Calles de Madrid', iso: 250, aperture: 'f/4.8', shutter: '1/200s', date: '2024', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-023': { location: 'Calles de Madrid', iso: 100, aperture: 'f/11.0', shutter: '1.6s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-024': { location: 'Calles de Madrid', iso: 100, aperture: 'f/16.0', shutter: '25.0s', date: '2023', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-025': { location: 'Calles de Madrid', iso: 250, aperture: 'f/11.0', shutter: '20.0s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-026': { location: 'Calles de Madrid', iso: 320, aperture: 'f/5.6', shutter: '1/2s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
    'UR-027': { location: 'Calles de Madrid', iso: 320, aperture: 'f/9.0', shutter: '1.0s', date: '2022', camera: 'Olympus OM-D E-M10 Mark II', lens: 'M.Zuiko 14-42mm f/3.5-5.6' },
};

const HANDWRITTEN_NOTES = [
    "¿Te detuviste a mirar?",
    "Madrid, 02:14 AM",
    "La luz de octubre",
    "Silencios urbanos",
    "Esquinas olvidadas",
    "Ritmo frenético"
];

const FRAME_TYPES = ['frame-polaroid', 'frame-kodak', 'frame-fineart', 'frame-none'];

// ===== PHOTO INITIALIZATION =====
function initializePhotos() {
    const photos = document.querySelectorAll('.photo-draggable, .photo-card');

    // Calculate safe zones based on device
    const isMobile = window.innerWidth <= 768;
    const sidebar = document.querySelector('.manifesto-sidebar');
    const sidebarHeight = sidebar ? sidebar.offsetHeight : 0;

    const safeLeft = isMobile ? 10 : 360;
    const safeRight = isMobile ? 10 : 300;
    // Increased safeTop to shift everything up a bit, and safeBottom significantly for mobile
    const safeTop = isMobile ? 80 : 80;
    const safeBottom = isMobile ? 400 : 300;

    // We use the actual canvas container height to bound the photos safely
    const canvasContainer = document.getElementById('canvasContainer');
    const containerHeight = canvasContainer ? canvasContainer.offsetHeight : window.innerHeight * 1.5;
    
    // On mobile, keep them strictly inside the canvas container to avoid hitting Contact
    const availableHeight = containerHeight - safeTop - safeBottom;
    const availableWidth = window.innerWidth - safeLeft - safeRight;

    photos.forEach((photo, index) => {
        const frameType = FRAME_TYPES[Math.floor(Math.random() * FRAME_TYPES.length)];
        photo.classList.add(frameType);

        if (frameType === 'frame-id') {
            photo.dataset.frameNumber = Math.floor(Math.random() * 36) + 1;
            const number = document.createElement('div');
            number.className = 'kodak-number';
            number.textContent = photo.dataset.frameNumber + (Math.random() > 0.5 ? 'A' : '');
            number.style.position = 'absolute';
            number.style.bottom = '4px';
            number.style.right = '8px';
            number.style.fontSize = '10px';
            number.style.color = 'rgba(255,255,255,0.5)';
            number.style.fontFamily = 'monospace';
            number.style.pointerEvents = 'none';
            photo.appendChild(number);
        }

        if (Math.random() > 0.7) {
            const tape = document.createElement('div');
            tape.className = 'washi-tape';
            if (Math.random() > 0.5) {
                tape.classList.add('washi-tape-corner');
            }
            photo.appendChild(tape);
        }

        const randomRotation = (Math.random() * 16) - 8;
        const photoWidth = photo.offsetWidth || 150;
        const photoHeight = photo.offsetHeight || 200;

        let randomX, randomY;

        if (isMobile) {
            // Divide the vertical space, but allow plenty of overlap since we have 50 photos
            const segmentHeight = Math.max(availableHeight / photos.length, 20); // ensure positive spacing
            const segmentStart = safeTop + (index * segmentHeight);

            const verticalVariation = Math.min(segmentHeight, 50);
            randomY = segmentStart + (Math.random() * verticalVariation);

            // Horizontal distribution
            const alternateLeft = index % 2 === 0;
            if (alternateLeft) {
                randomX = safeLeft + Math.random() * (availableWidth * 0.4);
            } else {
                randomX = safeLeft + availableWidth * 0.6 + Math.random() * (availableWidth * 0.4) - photoWidth;
            }

            // Strictly bounds check
            randomX = Math.max(safeLeft, Math.min(randomX, window.innerWidth - photoWidth - safeRight));
            randomY = Math.max(safeTop, Math.min(randomY, safeTop + availableHeight - photoHeight));
        } else {
            // Desktop: original random distribution
            const maxX = window.innerWidth - photoWidth - safeRight;
            const maxY = containerHeight - photoHeight - safeBottom;

            randomX = Math.max(safeLeft, Math.min(safeLeft + Math.random() * (maxX - safeLeft), maxX));
            randomY = Math.max(safeTop, Math.min(safeTop + Math.random() * (maxY - safeTop), maxY));
        }

        photo.style.left = `${randomX}px`;
        photo.style.top = `${randomY}px`;
        photo.style.transform = `rotate(${randomRotation}deg)`;

        photo.dataset.originalTransform = `rotate(${randomRotation}deg)`;
        photo.dataset.currentX = 0;
        photo.dataset.currentY = 0;

        photo.style.zIndex = Math.floor(Math.random() * 10) + 5;
    });
}

// ===== DECORATIONS GENERATOR =====
function initializeDecorations() {
    const decorationLayer = document.getElementById('decorationLayer');
    if (!decorationLayer) return;

    HANDWRITTEN_NOTES.forEach(text => {
        const note = document.createElement('div');
        note.className = 'handwritten-note';
        note.textContent = text;
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        const rot = (Math.random() * 20) - 10;
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;
        note.style.transform = `rotate(${rot}deg)`;
        decorationLayer.appendChild(note);
    });

    for (let i = 0; i < 2; i++) {
        const stain = document.createElement('div');
        stain.className = 'coffee-stain';
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        stain.style.left = `${x}px`;
        stain.style.top = `${y}px`;
        decorationLayer.appendChild(stain);
    }

    for (let i = 0; i < 3; i++) {
        const arrow = document.createElement('div');
        arrow.className = 'hand-drawn-arrow';
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        const rot = Math.random() * 360;
        arrow.style.left = `${x}px`;
        arrow.style.top = `${y}px`;
        arrow.style.setProperty('--rotation', `${rot}deg`);
        decorationLayer.appendChild(arrow);
    }
}

// ===== INTERACTIVE FILM STRIP =====
function initializeInteractiveFilmStrip() {
    const frames = document.querySelectorAll('.film-frames .frame');
    frames.forEach(frame => {
        frame.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = frame.dataset.target;
            const targetPhoto = document.querySelector(`.photo-draggable[data-photo="${targetId}"]`);
            if (targetPhoto) {
                centerPhoto(targetPhoto);
                frames.forEach(f => f.classList.remove('active'));
                frame.classList.add('active');
            }
        });
    });
}

function centerPhoto(photoElement) {
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    const rect = photoElement.getBoundingClientRect();
    const newLeft = viewportCenterX - (rect.width / 2);
    const newTop = viewportCenterY - (rect.height / 2);

    photoElement.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
    photoElement.style.left = `${newLeft}px`;
    photoElement.style.top = `${newTop}px`;
    photoElement.style.transform = `scale(1.1) rotate(0deg)`;
    photoElement.style.zIndex = 100;

    photoElement.dataset.currentX = newLeft;
    photoElement.dataset.currentY = newTop;

    setTimeout(() => {
        photoElement.style.transition = 'box-shadow 0.2s, transform 0.2s';
        photoElement.style.transform = photoElement.dataset.originalTransform;
    }, 1000);
}

// ===== PHYSICS DRAG HANDLER =====
class PhotoDragHandler {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.isDown = false;
        this.startX = 0;
        this.startY = 0;

        this.currentX = parseFloat(element.dataset.currentX) || 0;
        this.currentY = parseFloat(element.dataset.currentY) || 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = this.currentX;
        this.yOffset = this.currentY;

        // Physics variables
        this.velocityX = 0;
        this.velocityY = 0;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.friction = 0.95; // Increased inertia
        this.animationFrameId = null;

        this.init();
    }

    init() {
        this.element.addEventListener('mousedown', this.dragStart.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.dragEnd.bind(this));

        // Touch support
        this.element.addEventListener('touchstart', this.dragStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.drag.bind(this), { passive: false });
        document.addEventListener('touchend', this.dragEnd.bind(this));
    }

    dragStart(e) {
        if (e.target.closest('.photo-draggable') !== this.element) return;

        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);

        let clientX, clientY;
        if (e.type === "touchstart") {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        this.initialX = clientX - this.xOffset;
        this.initialY = clientY - this.yOffset;
        this.lastMouseX = clientX;
        this.lastMouseY = clientY;

        this.startX = clientX;
        this.startY = clientY;
        this.isDown = true;

        // NEW: Instant Grab Response
        this.element.style.transition = 'none';

        // Bring to front immediately
        document.querySelectorAll('.photo-draggable').forEach(el => el.style.zIndex = '5');
        this.element.style.zIndex = '100';
    }

    drag(e) {
        if (!this.isDown) return;

        // Only prevent default if we actually moved a bit to allow scrolling if needed
        // but for photos we usually want to block it to avoid weird page behavior
        e.preventDefault();

        let clientX, clientY;
        if (e.type === "touchmove") {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        // Reduced/Zero Threshold for visual movement, but keep isDragging for click/drag disambiguation
        if (!this.isDragging) {
            const dist = Math.hypot(clientX - this.startX, clientY - this.startY);
            if (dist > 2) { // Tiny threshold just for intentionality
                this.isDragging = true;
                this.element.classList.add('dragging');
            }
        }

        this.velocityX = clientX - this.lastMouseX;
        this.velocityY = clientY - this.lastMouseY;
        this.lastMouseX = clientX;
        this.lastMouseY = clientY;

        this.currentX = clientX - this.initialX;
        this.currentY = clientY - this.initialY;

        this.xOffset = this.currentX;
        this.yOffset = this.currentY;

        this.setTranslate(this.currentX, this.currentY, this.element);
    }

    dragEnd(e) {
        this.isDown = false;
        if (!this.isDragging) return;

        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.isDragging = false;
        this.element.classList.remove('dragging');

        this.inertiaLoop();
    }

    inertiaLoop() {
        if (Math.abs(this.velocityX) < 0.1 && Math.abs(this.velocityY) < 0.1) {
            return;
        }

        this.velocityX *= this.friction;
        this.velocityY *= this.friction;

        this.currentX += this.velocityX;
        this.currentY += this.velocityY;
        this.xOffset = this.currentX;
        this.yOffset = this.currentY;

        this.setTranslate(this.currentX, this.currentY, this.element);

        this.animationFrameId = requestAnimationFrame(this.inertiaLoop.bind(this));
    }

    setTranslate(xPos, yPos, el) {
        const rotation = el.style.transform.match(/rotate\(([^)]+)\)/);
        const rotStr = rotation ? `rotate(${rotation[1]})` : 'rotate(0deg)';
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) ${rotStr}`;
        el.dataset.currentX = xPos;
        el.dataset.currentY = yPos;
    }
}

function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.photo-draggable, .photo-card');
    draggables.forEach(draggable => {
        new PhotoDragHandler(draggable);
    });
}

// ===== CUSTOM CURSOR LOGIC =====
function initializeCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Disable custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const addHover = (selector, className) => {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add(className));
            el.addEventListener('mouseleave', () => cursor.classList.remove(className));
        });
    };

    addHover('a, button, .frame, .nav-link', 'cursor-expand');
    addHover('.photo-draggable', 'cursor-focus');
}

// ===== MODAL LOGIC =====
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalLocation = document.getElementById('modalLocation');

function setupModal() {
    const photos = document.querySelectorAll('.photo-draggable, .photo-card');

    photos.forEach(photo => {
        let startX, startY, startTime;

        photo.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
            startTime = Date.now();
        });

        photo.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        });

        const handleClick = (e, clientX, clientY) => {
            const diffX = Math.abs(clientX - startX);
            const diffY = Math.abs(clientY - startY);
            const timeDiff = Date.now() - startTime;

            if (diffX < 10 && diffY < 10 && timeDiff < 300) {
                const img = photo.querySelector('img');
                const id = photo.dataset.photo;
                openModal(img.src, id);
            }
        };

        photo.addEventListener('mouseup', (e) => handleClick(e, e.clientX, e.clientY));
        photo.addEventListener('touchend', (e) => {
            if (Date.now() - startTime < 300) {
                const img = photo.querySelector('img');
                const id = photo.dataset.photo;
                openModal(img.src, id);
            }
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}
// ===== MODAL LOGIC (Refined) =====
function openModal(src, id, storyText = '', author = '') {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitleCode = document.getElementById('modalTitleCode');
    const modalStoryText = document.getElementById('modalStoryText');

    if (!modal || !modalImg) return;

    modalImg.src = src;
    if (modalTitleCode) {
        modalTitleCode.textContent = id;
    }

    // Handle Stories-specific content
    if (modalStoryText) {
        if (storyText) {
            modalStoryText.innerHTML = `
                <div style="margin-top: 1.5rem;">
                    <p style="line-height: 1.8; color: #444; font-size: 1.1rem;">${storyText}</p>
                    ${author ? `<p style="text-align: right; margin-top: 1.5rem; font-family: 'Nothing You Could Do', cursive; font-size: 1.2rem; color: #555;">— ${author}</p>` : ''}
                </div>
            `;
            modalStoryText.style.display = 'block';
        } else {
            modalStoryText.style.display = 'none';
        }
    }

    modal.classList.add('active');
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const details = document.querySelector('.photo-details');
    if (details) {
        details.scrollTop = 0;
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    const modalStoryText = document.getElementById('modalStoryText');

    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset stories content
    if (modalStoryText) {
        modalStoryText.innerHTML = '';
        modalStoryText.style.display = 'none';
    }
}

// ===== PRIVACY MODAL LOGIC =====
function setupPrivacyModal() {
    const privacyLink = document.getElementById('privacyLink');
    const privacyModal = document.getElementById('privacyModal');
    const privacyClose = document.getElementById('privacyClose');
    const privacyBackdrop = document.getElementById('privacyBackdrop');

    if (!privacyLink || !privacyModal) return;

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closePrivacy = () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (privacyClose) privacyClose.addEventListener('click', closePrivacy);
    if (privacyBackdrop) privacyBackdrop.addEventListener('click', closePrivacy);
}

// ===== DEVELOPING EFFECT =====
function setupLazyLoading() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.complete) {
                    startDeveloping(img);
                } else {
                    img.onload = () => startDeveloping(img);
                }
                observer.unobserve(img);
            }
        });
    }, observerOptions);

    const images = document.querySelectorAll('img');
    images.forEach(img => observer.observe(img));
}

function startDeveloping(img) {
    const randomDelay = Math.random() * 500;
    setTimeout(() => {
        img.classList.add('developing-complete');
    }, randomDelay);
}

// ===== SIDEBAR LEGIBILITY (Scroll trigger) =====
function setupSidebarObserver() {
    const sidebar = document.querySelector('.manifesto-sidebar');
    const darkSection = document.getElementById('sobre-mi');

    if (!sidebar || !darkSection) return;

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Trigger slightly before it hits the edge
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sidebar.classList.add('dark-bg-active');
            } else {
                sidebar.classList.remove('dark-bg-active');
            }
        });
    }, observerOptions);

    observer.observe(darkSection);
}

// ===== INITIALIZATION (v12.0) =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando Más Allá del Scroll v12.0...");
    
    // Priority setup
    setupPrivacyModal();
    
    initializePhotos();
    initializeDecorations();
    setupDragAndDrop();
    setupModal();
    setupLazyLoading();
    initializeCursor();
    setupSidebarObserver();
    initializeDonationSystem();

    // Isolated mobile CTA fixes
    const floatCTA = document.getElementById('floatingCTA');
    if (floatCTA) {
        const stopProp = (e) => e.stopPropagation();
        floatCTA.addEventListener('touchstart', stopProp, { passive: true });
        floatCTA.addEventListener('touchend', stopProp, { passive: true });
        floatCTA.addEventListener('touchmove', stopProp, { passive: true });
        floatCTA.addEventListener('click', stopProp);
        floatCTA.addEventListener('mousedown', stopProp);
    }
});

// ===== DONATION SYSTEM =====
function initializeDonationSystem() {
    const donationBtns = document.querySelectorAll('.donation-btn');
    const stamp = document.getElementById('mecenasStamp');
    const stampDate = document.getElementById('stampDate');
    const paymentOverlay = document.getElementById('paymentOverlay');
    const paymentSpinner = document.getElementById('paymentSpinner');
    const paymentSuccess = document.getElementById('paymentSuccess');
    const paymentStatus = document.getElementById('paymentStatus');

    if (!donationBtns.length || !stamp) return;

    donationBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // CONFIGURATION: Real Ko-fi Link
            const KOFI_URL = "https://ko-fi.com/vddvo";
            let targetUrl = KOFI_URL;

            if (btn.tagName === 'A') {
                targetUrl = btn.href || KOFI_URL;
            }

            // CRITICAL FIX: Open window IMMEDIATELY to avoid popup blockers
            window.open(targetUrl, '_blank');

            // UI Feedback (Visuals only)
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="label">Abriendo Ko-fi...</span>';

            // Show local feedback (stamp) as a thank you
            if (paymentOverlay && stamp) {
                paymentOverlay.classList.add('active');
                if (paymentSpinner) paymentSpinner.style.display = 'none';
                if (paymentSuccess) paymentSuccess.style.display = 'block';
                if (paymentStatus) paymentStatus.textContent = '¡Gracias por tu apoyo!';

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    paymentOverlay.classList.remove('active');
                    createMecenasStamp(stamp, stampDate);

                    // Close modal
                    const modal = document.getElementById('photoModal');
                    if (modal) {
                        modal.classList.remove('active');
                        document.getElementById('modalBackdrop')?.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }, 1500);
            } else {
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            }
        });
    });
}

function createMecenasStamp(stamp, stampDate) {
    if (!stamp) return;
    const now = new Date();
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    if (stampDate) stampDate.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
    stamp.classList.add('visible');
    stamp.addEventListener('click', () => { stamp.classList.remove('visible'); }, { once: true });
}

// ===== MOBILE FIX: ISOLATE CTA EVENTS =====
document.addEventListener('DOMContentLoaded', () => {
    const floatCTA = document.getElementById('floatingCTA');

    if (floatCTA) {
        // Stop drag handlers from seeing this element's touches
        const stopProp = (e) => {
            e.stopPropagation();
        };

        // If we stop propagation of touchstart, the global 'preventDefault' won't happen
        // allowing the browser to generate a click/navigate event naturally.
        floatCTA.addEventListener('touchstart', stopProp, { passive: true });
        floatCTA.addEventListener('touchend', stopProp, { passive: true });
        floatCTA.addEventListener('touchmove', stopProp, { passive: true });
        floatCTA.addEventListener('click', stopProp);
        floatCTA.addEventListener('mousedown', stopProp);
    }
});
