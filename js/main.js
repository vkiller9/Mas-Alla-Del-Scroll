/* ================================================
   MAIN JAVASCRIPT
   Core Functionality & Initialization
   ================================================ */

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c📸 Portfolio Cinematográfico 3D', 'font-size: 24px; font-weight: bold; background: linear-gradient(90deg, #FFD700, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%c✨ Storytelling inmersivo con elementos 3D', 'font-size: 14px; color: #A0A0A0;');

    initNavigation();
    initProgressBar();
    initScrollReveal();
    initLightbox();
    initBeforeAfterSlider();
    initParticles();

    // Page entrance animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ============ NAVIGATION ============
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll & close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu
                if (navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// ============ PROGRESS BAR ============
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.pageYOffset / documentHeight) * 100;

        progressBar.style.width = `${scrolled}%`;
    });
}

// ============ SCROLL REVEAL ============
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe general reveal elements
    revealElements.forEach(el => observer.observe(el));

    // Timeline items with stagger
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
        }, index * 100);
    });

    // Gallery items
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                galleryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            galleryObserver.observe(item);
        }, index * 50);
    });

    // Timeline reveals
    timelineItems.forEach(item => {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.3 });

        timelineObserver.observe(item);
    });
}

// ============ LIGHTBOX ============
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryCards = document.querySelectorAll('.gallery-card');

    let currentIndex = 0;
    const images = [];

    // Collect gallery data
    galleryCards.forEach((card, index) => {
        const placeholder = card.querySelector('.image-placeholder');
        const title = card.querySelector('.card-info h3').textContent;
        const description = card.querySelector('.card-info p').textContent;
        const gradient = placeholder.style.background;

        images.push({ gradient, title, description });

        card.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxContent() {
        const current = images[currentIndex];

        // For placeholder, create a colored div since we don't have real images
        lightboxImage.style.display = 'none';
        const placeholderDiv = document.createElement('div');
        placeholderDiv.style.width = '600px';
        placeholderDiv.style.height = '450px';
        placeholderDiv.style.background = current.gradient;
        placeholderDiv.style.borderRadius = '16px';
        placeholderDiv.style.display = 'flex';
        placeholderDiv.style.alignItems = 'center';
        placeholderDiv.style.justifyContent = 'center';
        placeholderDiv.style.fontSize = '2rem';
        placeholderDiv.style.color = 'white';
        placeholderDiv.textContent = current.title;

        // Replace image with placeholder
        const existingPlaceholder = lightbox.querySelector('.lightbox-placeholder');
        if (existingPlaceholder) {
            existingPlaceholder.remove();
        }
        placeholderDiv.classList.add('lightbox-placeholder');
        lightboxImage.parentNode.insertBefore(placeholderDiv, lightboxImage);

        lightboxTitle.textContent = current.title;
        lightboxDescription.textContent = current.description;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxContent();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxContent();
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// ============ BEFORE/AFTER SLIDER ============
function initBeforeAfterSlider() {
    const sliderLine = document.querySelector('.ba-slider-line');
    const afterImage = document.querySelector('.ba-image.after');
    const container = document.querySelector('.ba-container');

    if (!sliderLine || !afterImage || !container) return;

    let isDragging = false;

    function updateSlider(e) {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const percentage = (x / rect.width) * 100;

        if (percentage >= 0 && percentage <= 100) {
            sliderLine.style.left = `${percentage}%`;
            afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
    }

    sliderLine.addEventListener('mousedown', () => {
        isDragging = true;
    });

    sliderLine.addEventListener('touchstart', () => {
        isDragging = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) updateSlider(e);
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) updateSlider(e);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// ============ PARTICLES ============
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 15}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ============ UTILITY FUNCTIONS ============

// Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 0) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// ============ PERFORMANCE OPTIMIZATION ============
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✅ Portfolio totalmente cargado');
});

// Lazy load images (if real images were used)
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}
