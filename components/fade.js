const paragraphs = document.querySelectorAll(".section__paragraph");
const timelineComponents = document.querySelectorAll(".timeline__component");
const sectionHeaders = document.querySelectorAll(".section__header");

document.addEventListener("scroll", function() {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section__paragraph--visible");
            paragraph.classList.remove("fade-out"); // Remove fade-out class
        } else {
            paragraph.classList.remove("section__paragraph--visible");
        }
    });

    timelineComponents.forEach(component => {
        if (isInView(component)) {
            component.classList.add("timeline__component--visible");
            component.classList.remove("fade-out");
        } else {
            component.classList.remove("timeline__component--visible");
        }
    });

    sectionHeaders.forEach(header => {
        const textWidth = header.offsetWidth + 'px'; // Get the width of the header text
        header.style.setProperty('--width', textWidth); // Set width as a custom CSS property
        if (isInView(header)) {
            header.classList.add("section__header--visible");
            header.classList.remove("fade-out");
        } else {
            header.classList.remove("section__header--visible");
        }
    });
});

// Function to check if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
