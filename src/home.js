// Toggle navigation menu for smaller screens
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("translate-x-0");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("translate-x-0");
});
