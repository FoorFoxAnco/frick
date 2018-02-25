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
              $('#body').removeClass("lighten-3" + " " + "blue-grey");
              $('#nav').addClass("lighten-1");
              $('#nav').removeClass("darken-3");
              $('#footer').addClass("lighten-1");
              $('#footer').removeClass("darken-3");
              window.alert("black");
                    }
                    else
                    { // for hits 1,3,5,7
              $('#body').addClass("lighten-3" + " " + "blue-grey");
              $('#nav').addClass("darken-3");
              $('#nav').removeClass("lighten-1");
              $('#footer').addClass("darken-3");
              $('#footer').removeClass("lighten-1");
              window.alert("black");
                    }
                   hits++;
        return false;
    });
});
/**/
