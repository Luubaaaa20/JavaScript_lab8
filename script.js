function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}

const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');
const slides = carousel.children;
let currentSlide = 0;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (i === 0) indicator.classList.add('active');
  indicator.onclick = () => goToSlide(i);
  indicatorsContainer.appendChild(indicator);
}

const indicators = indicatorsContainer.children;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.toggle('active', i === currentSlide);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

setInterval(nextSlide, 5000);
