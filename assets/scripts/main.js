$(document).ready(function () {
    // Burger Menu
    $('.js-menu-button').on('click touchstart', function (event) {
        event.preventDefault();
        $.when($('.js-heart-menu, .js-heart-menu-button').removeClass('is-active')).done(function () {
            var resizeTimer;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                $('body').toggleClass('is-active');
            }, 150);
        });
    });

    // Heart Menu
    $('.js-heart-menu-button').on('click touchstart', function (event) {
        event.preventDefault();
        $.when($('body').removeClass('is-active')).done(function () {
            var resizeTimer;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                $('.js-heart-menu, .js-heart-menu-button').toggleClass('is-active');
            }, 150);
        });
    });

});

$(window).on('resize', function (e) {
    $('.js-heart-menu, .js-heart-menu-button').removeClass('is-active');
});