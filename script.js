// responsive code
var navIcon = document.getElementsByClassName("hamburger-icon")[0];
var navLinks = document.querySelector(".sticky-header nav");

navIcon.addEventListener("click", function() {
    navLinks.classList.toggle("display-visible");
});