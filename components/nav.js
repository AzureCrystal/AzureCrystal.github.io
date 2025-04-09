// Toggle the side navigation on mobile when the button is clicked
document.getElementById('mobile-nav-toggle').addEventListener('click', function() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('open');
});

// Debounced scroll event listener to handle the navbar visibility
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout); // Clear any existing timeout
    scrollTimeout = setTimeout(function() {
        const splashHeight = document.querySelector('.fluid-simulation').offsetHeight;
        const sideNav = document.getElementById('sideNav');
        
        // Check if we've scrolled past the splash screen and we are on a larger screen
        if (window.scrollY > splashHeight - 1 && window.innerWidth > 768) {
            sideNav.classList.add('open');  // Show the side nav
        } else {
            sideNav.classList.remove('open');  // Hide the side nav
        }
    }, 50); // Add a small delay to avoid jerky scrolling behavior
});