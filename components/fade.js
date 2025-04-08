document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".section__paragraph");
    const timelineComponents = document.querySelectorAll(".timeline__component");
    const sectionHeaders = document.querySelectorAll(".section__header");

    // Function to add visibility on intersection
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting) {
                // Add visible class when element enters the viewport
                element.classList.add(`${element.classList[0]}--visible`);
                element.classList.remove("fade-out"); // Make sure fade-out is removed
            } else {
                // Remove visible class when element leaves the viewport, but only when scrolling back up
                if (entry.boundingClientRect.top > 0) {
                    // Only fade-out when scrolling back up
                    element.classList.remove(`${element.classList[0]}--visible`);
                }
            }
        });
    }

    // Create the intersection observer
    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each paragraph, timeline component, and section header
    paragraphs.forEach(paragraph => observer.observe(paragraph));
    timelineComponents.forEach(component => observer.observe(component));
    sectionHeaders.forEach(header => observer.observe(header));
});
