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
    console.log("hi");
    $('section').click(function () {
        $("#nav-icon").removeClass('open');
        $(".side-nav-closed").removeClass('side-nav-open');
        x = 0;
    });
});


/* Remove side menu on scroll */
$(document).on('scroll', function () {
    x = x + 1;
    
    var height = $(window).scrollTop();
    var bottom = $(window).scrollTop() + $(window).height() == $(document).height()
    if (x > 30 || height==0 || bottom) {
        $("#nav-icon").removeClass('open');
        $(".side-nav-closed").removeClass('side-nav-open');
        x = 0;
    }
});