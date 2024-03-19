// toggle icon navbar

let navbar = document.querySelector(".navbar");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the appropriate navLink
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document
        .querySelector('header nav a[href*="' + id + '"]')
        .classList.add("active");
      // active section for animation on scroll
      
    }
    // if to use animation that repeats on scroll use this
   
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar click navbar links scroll
  menuIcon.classList.remove("active");
  navbar.classList.remove("active");

  // animation footer on scroll

});

// form reset

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.reset();
});
