const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const slides = document.querySelector("#slides");
const images = slides.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

function showSlide(index) {
  if (index >= images.length) currentIndex = 0;
  else if (index < 0) currentIndex = images.length - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dotsContainer.innerHTML = "";
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add(i === currentIndex ? "active-dot" : "");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });
}

prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

setInterval(() => showSlide(currentIndex + 1), 4000);

showSlide(currentIndex);
