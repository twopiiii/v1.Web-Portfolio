// hamburger button
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
const closeBurger = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const bodyScroll = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  navLinks.classList.add("active");
  // closeBurger.classList.add("active");
  overlay.classList.add("active");
  bodyScroll.classList.add("disable-scroll");
});

closeBurger.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  // closeBurger.classList.remove("active");
  overlay.classList.remove("active");
  bodyScroll.classList.remove("disable-scroll");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    // closeBurger.classList.remove("active");
    overlay.classList.remove("active");
    bodyScroll.classList.remove("disable-scroll");
  });
});
