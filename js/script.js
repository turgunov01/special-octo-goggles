var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 100,
});


var swiper = new Swiper(".mySwiper3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 4,
    spaceBetween: 30,
});

var swiper4 = new Swiper(".mySwiper4", {
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: '.swiper-pagination2'
    },

    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 2,
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: true,
});