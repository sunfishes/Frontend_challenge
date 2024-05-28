// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.carousel_image img');
const totalImages = images.length;
const intervalTime = 2000;

document.querySelector('.slide_next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.slide_prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const carouselImage = document.querySelector('.carousel_image');
    const width = images[0].clientWidth;
    carouselImage.style.transform = `translateX(-${currentIndex * width}px)`;
}

window.addEventListener('resize', updateCarousel);

let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, intervalTime);

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, intervalTime);
}