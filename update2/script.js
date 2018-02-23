$(document).ready(function(){
      $('.parallax').parallax();
    });
$(document).ready(function() {
// get current URL path and assign 'active' class
    	$('.nav ul li a[href^="/'+location.pathname.split("/")[1] +'"]').addClass('blue-grey');
    });
