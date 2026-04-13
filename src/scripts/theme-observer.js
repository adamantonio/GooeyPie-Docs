// src/scripts/theme-observer.js

function updateThemeResources() {
    // Starlight sets the theme on the <html> element
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    
    // Find every element on the page that has both data-light and data-dark
    const themeAwareElements = document.querySelectorAll('[data-light][data-dark]');

    themeAwareElements.forEach(el => {
        const newSrc = theme === 'light' ? el.dataset.light : el.dataset.dark;
        
        // Only update if the source is different to prevent flickering
        if (el.getAttribute('src') !== newSrc) {
            if (el.tagName === 'VIDEO') {
                const time = el.currentTime;
                const paused = el.paused;
                el.src = newSrc;
                el.load();
                el.currentTime = time;
                if (!paused) el.play().catch(() => {});
            } else {
                el.src = newSrc;
            }
        }
    });
}

// Setup the observer once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateThemeResources();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'data-theme') {
                updateThemeResources();
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
});