$(function () {

    var currentSlide = 0,
        slidesCount = 5;

    $('.next').click(function () {
        currentSlide = currentSlide + 1;
        if (currentSlide == slidesCount) {
            currentSlide = 0;
        }
        scroll();
    });

    $('.prev').click(function () {
        currentSlide = currentSlide - 1;
        if (currentSlide == -1) {
            currentSlide = slidesCount-1;
        }
        scroll();
    });

    function scroll() {
        var offset = -100 * currentSlide;
        $('.slides').css({ transform: 'translateX(' + offset + 'vw)' })
    }
});

