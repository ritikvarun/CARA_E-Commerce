var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 2,
            spaceBetween: 12,
        },
        600:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        

    },
});