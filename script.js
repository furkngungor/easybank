const hamburgerButton = document.querySelector("#hamburger-button");
const closeButton = document.querySelector("#close-button");
const navbarNav = document.querySelector(".navbar-nav");
const span = document.querySelector("span");
const navbar = document.querySelector(".Navbar");

hamburgerButton.onclick = () => {
  navbarNav.classList.add("show-nav");
  hamburgerButton.style.display = "none";
  closeButton.style.display = "flex";
  span.classList.add("shadow");
}

closeButton.onclick = () => {
  navbarNav.classList.remove("show-nav");
  closeButton.style.display = "none";
  hamburgerButton.style.display = "flex";
  span.classList.remove("shadow");
}

span.onclick = () => {
  navbarNav.classList.remove("show-nav");
  closeButton.style.display = "none";
  hamburgerButton.style.display = "flex";
  span.classList.remove("shadow");
}

