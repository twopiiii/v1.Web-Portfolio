// Dark Mode
const checkbox = document.querySelector(".checkbox");
const body = document.body;
const themeKey = "darkTheme";

function enable() {
  body.classList.add("dark");
  checkbox.checked = true;
  localStorage.setItem(themeKey, "true");
}

function disable() {
  body.classList.remove("dark");
  checkbox.checked = false;
  localStorage.setItem(themeKey, "false");
}

// on content load
document.addEventListener("DOMContentLoaded", function () {
  const storedKey = localStorage.getItem(themeKey);

  if (storedKey === "true") {
    enable();
  } else {
    disable();
  }
});

// on checkbox change
checkbox.addEventListener("change", function () {
  if (this.checked) {
    enable();
  } else {
    disable();
  }
});

// show containers
const containers = document.querySelectorAll(".hidden");

function show() {
  const trigger = window.innerHeight + 20;

  containers.forEach((container) => {
    // Check if container is a valid DOM element before proceeding
    if (container && typeof container.getBoundingClientRect === "function") {
      const triggerCont = container.getBoundingClientRect().top;

      if (triggerCont < trigger) {
        container.classList.add("container-show");
      } else {
        container.classList.remove("container-show");
      }
    } else {
      console.error("Invalid container element:", container);
    }
  });
}

// Attach the 'show' function to the scroll event correctly
window.addEventListener("scroll", show);

// Call 'show' once on page load to reveal any initially visible containers
show();

// scroll-padding-top
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    const navHeight = document.querySelector("nav").offsetHeight;

    if (target) {
      const targetPos = target.offsetTop - navHeight - 50;
      // target.classList.add("nav-active");

      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  });
});

// li.active
// const getLinks = document.querySelector(".links");
// const ulLinks = getLinks.querySelectorAll("li");

// ulLinks.forEach((clicked) => {
//   clicked.addEventListener("click", () => {
//     ulLinks.forEach((nonClicked) => {
//       nonClicked.classList.remove("active");
//     });

//     clicked.classList.add("active");
//   });
// });

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
