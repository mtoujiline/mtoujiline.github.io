(function () {
    'use strict';
    var x = 0;

    $(document).ready(function () {
        $('#nav-icon').click(function () {
            $(this).toggleClass('open');
            $(".side-nav-closed").toggleClass('side-nav-open');
            x = 0;
        });
    });

    /* Remove side menu on click in main menu */
    $(document).ready(function () {
        $('section').click(function () {
            $("#nav-icon").removeClass('open');
            $(".side-nav-closed").removeClass('side-nav-open');
            x = 0;
        });
    });

    /* Remove side menu on scroll */
    $(document).on('scroll', function () {
        x = x + 1;
        if (x > 30) {
            $("#nav-icon").removeClass('open');
            $(".side-nav-closed").removeClass('side-nav-open');
            x = 0;
        }
    });
}());