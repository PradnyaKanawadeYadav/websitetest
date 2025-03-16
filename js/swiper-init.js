document.addEventListener("DOMContentLoaded", function () {
    var textSwiper = new Swiper(".text-swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var imageSwiper = new Swiper(".image-swiper", {
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Sync both sliders
    textSwiper.controller.control = imageSwiper;
    imageSwiper.controller.control = textSwiper;
});
