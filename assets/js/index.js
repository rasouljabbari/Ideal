

$('.banner-stories__item-wrapper').slick({
    centerMode: true,
    centerPadding: '20%',
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 1,
    responsive: [{
        breakpoint:768,
        settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
