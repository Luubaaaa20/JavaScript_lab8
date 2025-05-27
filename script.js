const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const slides = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
const totalSlides = slides.children.length;
let currentSlide = 0;
let interval = setInterval(nextSlide, 3000);

function updateDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentSlide) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateCarousel();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

updateCarousel();
