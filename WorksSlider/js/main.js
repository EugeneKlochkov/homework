;(function ($) {
    $(function () {
        $('.slider').slick({
            //infinite: true,
            dots: false,
            //autoplay:true,
            slidesToShow: 3,
            //slidesToScroll: 1,
            centerMode: true,
            centerPadding: '200px',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerMode: true,
                        centerPadding: '100px',
                        slidesToShow: 2
                    }
                },
            ]
        });
    });
})(jQuery);