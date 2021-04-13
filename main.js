const swiper = new Swiper('.slider-swiper', {
    // Optional parameters
    //direction: 'gorizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },

    },
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },

});

const swiper1 = new Swiper('.slider-swiper-large', {
    // Optional parameters
    //direction: 'gorizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        1900: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 2,
        },
    },
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next-1',
        prevEl: '.channel-button-prev-1',
    },

});


const swiper2 = new Swiper('.slider-swiper-2', {
    // Optional parameters
    //direction: 'gorizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next-2',
        prevEl: '.channel-button-prev-2',
    },
    breakpoints: {
        1900: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },
    },
});


const $searchButton = document.querySelector('.mobile-search');
const $mobileSearch = document.querySelector('.input-group');
$searchButton.addEventListener('click', () => {
    $mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth < 640) {
    swiper.destroy();
    swiper1.destroy();
    swiper2.destroy();
}