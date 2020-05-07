document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector(".navbar-burger");
    var navbarMenu = document.querySelector(".navbar-menu");
    burger.addEventListener("click", function () {
        burger.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
});