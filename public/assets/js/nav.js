var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener('scroll', function () {

    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-gray-900");
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-gray-900");
    } else {
        header.classList.remove("bg-white bg-gray-900");
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.add("bg-gray-100");

    }

});
