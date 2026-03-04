document.addEventListener("DOMContentLoaded", () => {

    // Update footer year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Initialize each carousel independently
    document.querySelectorAll(".carousel").forEach(carousel => {
        let index = 0;

        const slides = carousel.querySelector(".slides");
        if (!slides) return;

        const images = slides.querySelectorAll("img");
        const totalSlides = images.length;
        if (totalSlides === 0) return;

        function updateCarousel() {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        const nextBtn = carousel.querySelector(".next");
        const prevBtn = carousel.querySelector(".prev");
        if (!nextBtn || !prevBtn) return;

        nextBtn.addEventListener("click", () => {
            index++;
            if (index >= totalSlides) index = 0;
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => {
            index--;
            if (index < 0) index = totalSlides - 1;
            updateCarousel();
        });
    });
});