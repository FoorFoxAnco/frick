$(document).ready(function(){
      $('.parallax').parallax();
    });

/*function btnRed() {

    var element = document.getElementById("nav");
      element.classList.remove("white");
      element.classList.add("black");
    var element = document.getElementById("nav1");
      element.classList.add("blue-grey" , "darken-3");

    else {
    var element = document.getElementById("nav");
      element.classList.add("");
    var element = document.getElementById("nav1");
      element.classList.remove("darken-3");
    }
}
*/
/*
function color() {
  var element = document.getElementById("nav");
  var action = 0;
    if (action == 0) {
        element.classList.remove("black");
        window.alert("Dela");
        action = 1;
    }
    else {
        window.alert("Ne dela");
    }
}
*/
/*
function color(){
    var add = document.getElementById("shit");
    var element = document.getElementById("nav");
    var active = 0;
    add.addEventListener('click', function(e) {
        e.preventDefault();
        active += 1;
        switch(active) {
            case 1:
                element.classList.add("black");
                window.alert("Dela");
                break;
            case 2:
                $("#nav").removeClass("black");
                window.alert("Ne dela");
                break;
              }
            }, false);
          }
*/
/**/
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
/**/
