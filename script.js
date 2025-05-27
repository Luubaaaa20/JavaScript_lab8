const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

let autoSlide = setInterval(nextSlide, 5000);

nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 5000);
});

prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 5000);
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(parseInt(indicator.dataset.slide));
        autoSlide = setInterval(nextSlide, 5000);
    });
});
