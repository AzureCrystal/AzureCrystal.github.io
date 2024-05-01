const paragraphs = document.querySelectorAll(".section__paragraph");

document.addEventListener("scroll", function() {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section__paragraph--visible");
            paragraph.classList.remove("fade-out"); // Remove fade-out class
        } else {
            paragraph.classList.remove("section__paragraph--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
