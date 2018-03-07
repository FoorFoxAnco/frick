/*parralx*/
$(document).ready(function(){
      $('.parallax').parallax();
    });
/*invert colors*/
$(function(){
            var hits = 0; //->variable
    // Everything below this line is called "binding" a handler to an event (click event)
    $('#shit').click(function(){ // --> This whole function is the handler or listener
                    if  (hits % 2 !== 0) //for hits 2,4,6,8 etc. Also the condition
                    {
              $('#body').removeClass("darken-2" + " " + "blue-grey");
              $('#nav').addClass("lighten-2");
              $('#nav').removeClass("darken-4");
              $('#parralx').removeClass("darken-1" + " " + "blue-grey");
              $('#parralx').addClass("white");
              $('#h1').removeClass("white-text");
              $('#h1').addClass("black-text");
              $('#p1').removeClass("white-text");
              $('#p1').addClass("grey-text");
              $('#footer').addClass("lighten-2");
              $('#footer').removeClass("darken-4");
                    }
                    else
                    { // for hits 1,3,5,7
              $('#body').addClass("darken-2" + " " + "blue-grey");
              $('#nav').addClass("darken-4");
              $('#nav').removeClass("lighten-2");
              $('#parralx').addClass("darken-1" + " " + "blue-grey");
              $('#parralx').removeClass("white");
              $('#h1').addClass("white-text");
              $('#h1').removeClass("black-text");
              $('#p1').addClass("white-text");
              $('#p1').removeClass("grey-text");
              $('#footer').addClass("darken-4");
              $('#footer').removeClass("lighten-2");
                    }
                   hits++;
        return false;
    });
});
/*back to top*/
jQuery(document).ready(function() {
var offset = 250;
var duration = 300;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});
jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});
