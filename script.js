let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const logoContainer = document.getElementById("logoContainer");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.classList.add("shrink");
        logoContainer.classList.add("hide-logo");
    } else {
        // Scroll Up
        navbar.classList.remove("shrink");
        logoContainer.classList.remove("hide-logo");
    }
    lastScrollTop = scrollTop;
});
