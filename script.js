const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

const slides = document.getElementById("slides");
const images = slides.getElementsByTagName("img");
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function showSlide(i) {
  if (i >= images.length) index = 0;
  if (i < 0) index = images.length - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  }
}

nextBtn.addEventListener("click", () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  showSlide(index);
});

createDots();
showSlide(index);

setInterval(() => {
  index++;
  showSlide(index);
}, 5000);
