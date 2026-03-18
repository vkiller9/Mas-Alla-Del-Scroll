/* ================================================
   SCROLL ANIMATIONS
   GSAP ScrollTrigger Implementation
   ================================================ */

// Wait for GSAP and ScrollTrigger to load
window.addEventListener('load', () => {
    // Check if GSAP is available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('⚠️ GSAP o ScrollTrigger no están cargados. Usando animaciones básicas CSS.');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    initScrollAnimations();
});

function initScrollAnimations() {
    // ============ HERO ANIMATIONS ============
    gsap.from('.hero-title .title-line-1', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.hero-title .title-line-2', {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.6,
        ease: 'back.out(1.7)'
    });

    // ============ SECTION HEADERS ============
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // ============ TIMELINE ANIMATIONS ============
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -80,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // ============ PHILOSOPHY SECTION ============
    // Aperture animation
    gsap.from('.aperture-container', {
        scrollTrigger: {
            trigger: '.aperture-container',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.5,
        rotation: 180,
        duration: 1.2,
        ease: 'back.out(1.7)'
    });

    // Philosophy quote
    gsap.from('.philosophy-quote', {
        scrollTrigger: {
            trigger: '.philosophy-quote',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Principle cards
    gsap.utils.toArray('.principle-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // ============ PORTFOLIO SECTION ============
    // Filters
    gsap.from('.portfolio-filters', {
        scrollTrigger: {
            trigger: '.portfolio-filters',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    });

    // Gallery items with stagger
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: (index % 3) * 0.1,
            ease: 'power3.out'
        });
    });

    // ============ PROCESS SECTION ============
    // Film roll
    gsap.from('.film-roll', {
        scrollTrigger: {
            trigger: '.film-roll',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        rotationY: 45,
        duration: 1.2,
        ease: 'back.out(1.5)'
    });

    // Process steps
    gsap.utils.toArray('.process-step').forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // ============ EVOLUTION SECTION ============
    // Before/After slider
    gsap.from('.before-after-slider', {
        scrollTrigger: {
            trigger: '.before-after-slider',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
    });

    // Achievement numbers with counter
    gsap.utils.toArray('.achievement-number').forEach(number => {
        const finalValue = number.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));

        gsap.from(number, {
            scrollTrigger: {
                trigger: number,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function () {
                const current = Math.round(this.targets()[0].textContent);
                number.textContent = finalValue.includes('+') ? `${current}+` : current;
            }
        });
    });

    // ============ SUPPORT SECTION ============
    // Donation buttons
    gsap.from('.donation-btn', {
        scrollTrigger: {
            trigger: '.donation-buttons',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.5)'
    });

    // Support benefits
    gsap.from('.support-benefits', {
        scrollTrigger: {
            trigger: '.support-benefits',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // ============ PARALLAX EFFECTS ============
    // Subtle parallax on section backgrounds
    gsap.utils.toArray('.section').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            backgroundPosition: '50% 100px',
            ease: 'none'
        });
    });

    // Parallax on 3D camera
    gsap.to('.camera-3d-container', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.3,
        ease: 'none'
    });

    // ============ NARRATIVE TEXT REVEALS ============
    gsap.utils.toArray('.narrative-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // ============ SCROLL PROGRESS INDICATORS ============
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            document.documentElement.style.setProperty('--scroll-progress', self.progress);
        }
    });

    console.log('✅ GSAP ScrollTrigger animations initialized');
}

// ============ REFRESH SCROLLTRIGGER ON RESIZE ============
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 250);
});
