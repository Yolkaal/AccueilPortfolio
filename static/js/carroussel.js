document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const slides = document.getElementById("slides");
    if (!slides) return;

    let index = 0;
    const totalSlides = slides.children.length;

    function updateCarousel() {
        slides.style.transform = `translateX(-${index * 32}vw)`;
    }

    window.nextSlide = function () {
        index++;
        if (index >= totalSlides) index = 0;
        updateCarousel();
    };

    window.prevSlide = function () {
        index--;
        if (index < 0) index = totalSlides - 1;
        updateCarousel();
    };
});