 var x = 0;
 
 $(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
        $(".side-nav-closed").toggleClass('side-nav-open');
        x=0;
	});

});

/* Remove side menu on click in main menu */
 $(document).ready(function(){
	$('section').click(function(){
        $("#nav-icon3").removeClass('open');
        $(".side-nav-closed").removeClass('side-nav-open');
        x=0;
	});
    
});

/* Remove side menu on scroll */
$(document).on( 'scroll', function(){
    x++;
    if (x > 30) {
        $("#nav-icon3").removeClass('open');
        $(".side-nav-closed").removeClass('side-nav-open');
        x=0;
    }
	
});