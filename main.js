const swiper = new Swiper('.slider-swiper', {
    // Optional parameters
    //direction: 'gorizontal',
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },

});