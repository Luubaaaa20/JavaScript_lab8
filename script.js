const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const slidesContainer = document.querySelector('.carousel-slides');
let currentSlide = 0;
let autoSlideInterval;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100 / slides.length}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        stopAutoSlide();
        startAutoSlide();
    });
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);

startAutoSlide();
showSlide(currentSlide);
