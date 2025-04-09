// Toggle the side navigation on mobile when the button is clicked
document.getElementById('mobile-nav-toggle').addEventListener('click', function() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    const sideNav = document.getElementById('sideNav');
    const mobileNavButton = document.getElementById('mobile-nav-toggle');
    
    // Check if the click happened outside the side nav and mobile nav button
    if (window.innerWidth <= 768 && !sideNav.contains(event.target) && !mobileNavButton.contains(event.target)) {
        sideNav.classList.remove('open'); // Close the side nav
    }
});

const menuLinks = document.querySelectorAll('.side-nav ul li a');
menuLinks.forEach(link => {
    const sideNav = document.getElementById('sideNav');
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            const mobileNavButton = document.getElementById('mobile-nav-toggle');
            console.log(link.getAttribute('href'))
            if (link.getAttribute('href') === "#") {
                mobileNavButton.classList.remove('visible');
            }
            sideNav.classList.remove('open'); // Close the side nav when any link is clicked on mobile
        }
        else {
            if (link.getAttribute('href') === "#") {
                sideNav.classList.remove('open')
            }
        }
    });
});

// Debounced scroll event listener to handle the navbar visibility
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout); // Clear any existing timeout
    scrollTimeout = setTimeout(function() {
        const splashHeight = document.querySelector('.fluid-simulation').offsetHeight;
        const mobileNavButton = document.getElementById('mobile-nav-toggle');
        
        // Check if we've scrolled past the splash screen
        if (window.scrollY > splashHeight - 1 && window.innerWidth <= 768) {
            // If scrolled past the splash screen, make the nav button visible
            mobileNavButton.classList.add('visible');
        } else {
            // If we're at the top, or haven't passed the splash screen, make it invisible
            mobileNavButton.classList.remove('visible');
            sideNav.classList.remove('open');  // Show the side nav
        }

        if (window.scrollY > splashHeight - 1 && window.innerWidth > 768) {
            sideNav.classList.add('open');  // Show the side nav
        } else {
            sideNav.classList.remove('open');  // Hide the side nav
        }
    }, 50); // Debounce with a small delay to avoid jerky scrolling behavior
});
