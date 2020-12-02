$('[name="phone"]').mask('+7 (999) 999 99 99');

// accordeon
$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

$('.reviews-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                appendArrows: '.reviews-slider__nav',
                appendDots: '.reviews-slider__nav',
                dots: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.video-reviews-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            appendArrows: '.video-reviews-slider__nav',
            appendDots: '.video-reviews-slider__nav',
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    } else {
        $(".video-reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();
        return false;
    });
});
//плавный скролл en

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.btn-burger').click(function () {
    $(this).toggleClass('click');
    $('.mobile-menu').fadeToggle();
});