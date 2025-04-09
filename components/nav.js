window.onload = function() {
    // Smooth scroll to the top of the page when it is reloaded
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Wait for scroll event to show side nav after the splash screen
window.addEventListener('scroll', function() {
    const splashHeight = document.querySelector('.fluid-simulation').offsetHeight;
    const sideNav = document.getElementById('sideNav');
    
    // Check if we've scrolled past the splash screen
    if (window.scrollY > splashHeight - 1) {
        sideNav.classList.add('open');  // Show the side nav
    } else {
        sideNav.classList.remove('open');  // Hide the side nav
    }
});