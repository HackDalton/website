var burger = document.querySelector(".navbar-burger");
var navbarMenu = document.querySelector(".navbar-menu");
burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(".navbar").classList.remove("is-transparent")
        document.querySelector(".navbar").classList.add("is-info")
        document.querySelector(".navbar").classList.add("is-fixed-top")
    } else {
        document.querySelector(".navbar").classList.remove("is-info")
        document.querySelector(".navbar").classList.add("is-transparent")
        document.querySelector(".navbar").classList.add("is-fixed-top")
    }
};