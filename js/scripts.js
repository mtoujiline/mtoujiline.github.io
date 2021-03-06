(function () {
    'use strict';

    var positionsScrolled = 0,
        toggleMenu = function () {
            $('#nav-icon').toggleClass('open');
            $(".side-nav-closed").toggleClass('side-nav-open');
            positionsScrolled = 0;
        },
        closeMenu = function () {
            $("#nav-icon").removeClass('open');
            $(".side-nav-closed").removeClass('side-nav-open');
            positionsScrolled = 0;
        };


    /*Toggle menu between open and close*/
    $(document).ready(function () {
        $('#nav-icon').click(function () {
            toggleMenu();
        });
    });

    /* Remove side menu on click in main menu */
    $(document).ready(function () {
        $('section').click(function () {
            closeMenu();
        });
    });


    /* Remove side menu on scroll */
    $(document).on('scroll', function () {
        positionsScrolled = positionsScrolled + 1;
        var height = $(window).scrollTop(),
            bottom = $(window).scrollTop() + $(window).height() === $(document).height();
        if (positionsScrolled > 30 || height === 0 || bottom) {
            closeMenu();
        }
    });

    $(document).ready(function () {
      // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            closeMenu();
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 300, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    $(document).ready(function () {
        
        $(window).resize(function () {
            var winWidth = $(window).width();
            if (winWidth >= 1150) {
                closeMenu();
            }
        })
        
    });
}());