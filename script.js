const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

let current = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

document.getElementById("prev").onclick = () => {
  showSlide((current - 1 + slides.length) % slides.length);
};

document.getElementById("next").onclick = () => {
  showSlide((current + 1) % slides.length);
};

function autoSlide() {
  showSlide((current + 1) % slides.length);
}

setInterval(autoSlide, 5000); 

showSlide(0); 
