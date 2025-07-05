document.addEventListener('DOMContentLoaded', function() {
    console.log('Resume loaded');
    
    // You could add click handlers for the screenshot placeholders
    const placeholders = document.querySelectorAll('.screenshot-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('Screenshot would open here in a real implementation');
        });
    });
});


// Add click effect to skills items
document.querySelectorAll('.expertise-group li').forEach(item => {
    item.addEventListener('click', function() {
        this.style.color = '#0066cc';
        setTimeout(() => {
            this.style.color = '#555';
        }, 300);
    });
});

// Project card functionality
document.querySelectorAll('.project-card').forEach(card => {
    // Add click handler
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
    
    // Add keyboard accessibility
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        }
    });
    
    // Make cards focusable
    card.setAttribute('tabindex', '0');
});