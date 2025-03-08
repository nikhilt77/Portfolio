document.addEventListener('DOMContentLoaded', function() {
    // Select all links with hash (#) in the href attribute
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element from the href attribute
            const targetId = this.getAttribute('href');
            
            // Return if the href is just "#" (to avoid scrolling to top)
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            // If target element exists, scroll to it
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // 50px offset for any fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
