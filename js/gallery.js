/* ================================================
   GALLERY FUNCTIONALITY
   Filtering, Lightbox, Touch Gestures
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initGalleryFilters();
    initTouchGestures();
});

// ============ GALLERY FILTERS ============
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            filterGalleryItems(galleryItems, filter);
        });
    });

    console.log('✅ Gallery filters initialized');
}

function filterGalleryItems(items, filter) {
    items.forEach((item, index) => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
            // Show item with stagger
            setTimeout(() => {
                item.classList.remove('hidden');
                item.style.display = 'block';

                // Trigger reflow
                item.offsetHeight;

                // Add visible class for animation
                setTimeout(() => {
                    item.classList.add('visible');
                }, 50);
            }, index * 50);
        } else {
            // Hide item
            item.classList.remove('visible');
            setTimeout(() => {
                item.classList.add('hidden');
                item.style.display = 'none';
            }, 300);
        }
    });
}

// ============ TOUCH GESTURES FOR LIGHTBOX ============
function initTouchGestures() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;
        const minSwipeDistance = 50;

        // Horizontal swipe (next/prev)
        if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
            if (swipeDistanceX > minSwipeDistance) {
                // Swipe right - previous
                document.getElementById('lightboxPrev')?.click();
            } else if (swipeDistanceX < -minSwipeDistance) {
                // Swipe left - next
                document.getElementById('lightboxNext')?.click();
            }
        }

        // Vertical swipe down (close)
        if (swipeDistanceY > minSwipeDistance * 2) {
            document.getElementById('lightboxClose')?.click();
        }
    }

    console.log('✅ Touch gestures initialized');
}

// ============ LAZY LOADING FOR IMAGES ============
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('.gallery-item img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Load image
                    img.src = img.dataset.src;
                    img.classList.add('loading');

                    img.onload = () => {
                        img.classList.remove('loading');
                        img.classList.add('loaded');
                    };

                    // Stop observing
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => imageObserver.observe(img));

        console.log(`✅ Lazy loading initialized for ${lazyImages.length} images`);
    }
}

// Initialize lazy loading if needed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
} else {
    initLazyLoading();
}

// ============ GALLERY MASONRY LAYOUT (Optional) ============
function initMasonryLayout() {
    const gallery = document.getElementById('gallery');
    if (!gallery || !gallery.classList.contains('masonry')) return;

    // Simple masonry simulation with CSS Grid
    const items = gallery.querySelectorAll('.gallery-item');

    items.forEach((item, index) => {
        // Random span for variety (1-2)
        const randomSpan = Math.random() > 0.7 ? 2 : 1;
        item.style.gridRowEnd = `span ${randomSpan}`;
    });

    console.log('✅ Masonry layout initialized');
}

// ============ SHARE FUNCTIONALITY ============
function shareImage(imageUrl, title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this photo: ${title}`,
            url: imageUrl
        }).then(() => {
            console.log('✅ Shared successfully');
        }).catch((error) => {
            console.log('❌ Share failed:', error);
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(imageUrl).then(() => {
            showNotification('Link copied to clipboard!');
        }).catch(() => {
            console.log('❌ Copy failed');
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 215, 0, 0.95);
        color: #0A0A0A;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10001;
        animation: slideUp 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ============ DOWNLOAD FUNCTIONALITY ============
function downloadImage(imageUrl, filename) {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || 'photo.jpg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            showNotification('Download started!');
        })
        .catch(error => {
            console.log('❌ Download failed:', error);
        });
}

// Export functions for use in other modules
window.galleryFunctions = {
    shareImage,
    downloadImage,
    showNotification
};
