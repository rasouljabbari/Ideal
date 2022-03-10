$(document).ready(function () {

    $.fn.digits = function () {
        return this.each(function () {
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
        })
    };

    $(".dv-card-price").digits()
});

//slider product INDEX(one)
let swiper = new Swiper(".dv-banner-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: "auto",
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

////////////////////////////////
let swiperCard = new Swiper(".dv-slider-best-selling-products", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay : true,
    slidesPerView: 1,
    spaceBetween: 4,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768.1: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1700: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

//slider news product
let news_product = new Swiper(".dv-slider-news-products", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay : true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768.1: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1860: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


//slider product
let swiperProduct = new Swiper(".dv-swiper-product", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

});
let swiperProduct2 = new Swiper(".dv-swiper-product-2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    thumbs: {
        swiper: swiperProduct,
    },
});


//similar products
let swipeSimilar = new Swiper(".dv-slider-similar-products", {
    autoplay:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay : true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768.1: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1860: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

//star
let stars = document.querySelectorAll(".star");
document.querySelector(".star-container").addEventListener("click", starRating);
let rating = document.querySelector(".rating");
function starRating(e) {
    stars.forEach((star) => star.classList.remove("star__checked"));
    const i = [...stars].indexOf(e.target);
    if (i > -1) {
        stars[i].classList.add("star__checked");
    }
}
