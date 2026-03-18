/* ================================================
   3D CAMERA INTERACTION
   Mouse Parallax & Interactive Camera
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    init3DCamera();
});

function init3DCamera() {
    const cameraContainer = document.getElementById('camera3d');
    if (!cameraContainer) return;

    const camera = cameraContainer.querySelector('.camera-3d');
    if (!camera) return;

    // Add interactive class
    cameraContainer.classList.add('interactive');

    // Mouse parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Normalize to -1 to 1
        mouseX = (e.clientX - centerX) / centerX;
        mouseY = (e.clientY - centerY) / centerY;
    });

    // Smooth animation loop
    function animate() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        // Apply rotation based on mouse position
        const rotateY = currentX * 15; // Max 15 degrees
        const rotateX = -currentY * 10; // Max 10 degrees

        camera.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

        requestAnimationFrame(animate);
    }

    animate();

    // Flash on click
    const flash = camera.querySelector('.camera-flash');
    if (flash) {
        cameraContainer.addEventListener('click', () => {
            triggerFlash(flash);
        });
    }

    console.log('✅ 3D Camera interactive initialized');
}

function triggerFlash(flashElement) {
    // Create flash overlay
    const flashOverlay = document.createElement('div');
    flashOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
    `;
    document.body.appendChild(flashOverlay);

    // Animate flash
    flashOverlay.style.transition = 'opacity 0.1s';
    setTimeout(() => {
        flashOverlay.style.opacity = '0.8';
    }, 10);

    setTimeout(() => {
        flashOverlay.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        document.body.removeChild(flashOverlay);
    }, 300);

    // Flash element pulse
    flashElement.style.animation = 'none';
    setTimeout(() => {
        flashElement.style.animation = 'flash-pulse 3s infinite';
    }, 10);

    // Play shutter sound (optional - commented out)
    // const audio = new Audio('data:audio/wav;base64,...');
    // audio.play().catch(() => {});
}

// ============ APERTURE INTERACTION ============
document.addEventListener('DOMContentLoaded', () => {
    const aperture = document.getElementById('aperture');
    if (!aperture) return;

    let isOpen = false;

    aperture.addEventListener('click', () => {
        isOpen = !isOpen;
        toggleAperture(aperture, isOpen);
    });

    // Auto-open on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isOpen) {
                setTimeout(() => {
                    toggleAperture(aperture, true);
                    isOpen = true;
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aperture);
});

function toggleAperture(aperture, open) {
    const blades = aperture.querySelector('.aperture-blades');
    if (!blades) return;

    if (open) {
        blades.style.transform = 'scale(0.3)';
    } else {
        blades.style.transform = 'scale(1)';
    }
}

// ============ PARALLAX LAYERS ============
document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    console.log('✅ Parallax layers initialized');
});

// ============ 3D TILT ON GALLERY CARDS ============
document.addEventListener('DOMContentLoaded', () => {
    const galleryCards = document.querySelectorAll('.gallery-card');

    galleryCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    console.log('✅ 3D tilt on gallery cards initialized');
});
