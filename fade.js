const paragraphs = document.querySelectorAll(".section__paragraph");
const timelineComponents = document.querySelectorAll(".timeline__component");

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
});

// Function to check if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
