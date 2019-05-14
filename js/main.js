/*===========================================================================================variables declarations parthere=================================================================*/
//scrollValue to know position on the screen
var scrollValue = 0;
//noRepeatDown and noRepeatTop are made to avoid executing class change each time we scroll down
var noRepeat = true;
var on = true; // this one is used for on and off button


/* ===========================================================================================main function here====================================================================*/

function main(){
   scrollDetect();
   giveMeIdeas();
   SwitchLight();
   addEffect('.main-header-title-col',"fadeIn",4000);
    lunchRocket()
}
$(document).ready(main);

/* =========================================================================================== This function is made for the header animation, show hide and stuff, and since i had some problems with hide,show,fadeIn and fadeOut, i had to use css animation in order to simulate these effects, don't blame i couldn't find any solution :/ ====================================================================*/

function scrollDetect(){

   $(document).on('scroll',function(){
       var newScrollValue = $(this).scrollTop();
       if(newScrollValue === 0 && noRepeat === true){ //in case we reach the top, we change navbar color from white to transparent
           $('#main-nav-list').delay(3000).removeClass('color-custom').addClass('color-transparent');
           $('.custom-font-color').css('color','white');
       }
       if(newScrollValue> scrollValue){ // we're sliding down
           if(noRepeat === true){
           $('#main-nav-list').removeClass('color-transparent').addClass('hide'); /*this line is for making navbar fadeOut since fadeOut() didn't work for reasons that i ignore, so i used css transition to make it work*/
           //this one is for avoiding doing the action again
           noRepeat = false;
           }
       }else{
           if(noRepeat=== false){ // we're sliding up
            $('#main-nav-list').removeClass('hide').addClass('color-custom'); /*making navbar appear again and making it's background color white*/
            $('.custom-font-color').css('color','black'); //this one is for changing bootstrap default color to black
            noRepeat = true;  //this one is for avoiding doing the action again
           }
       }
       scrollValue= newScrollValue;
   })   
}

/*======================================= the rest of all otehr functions =============================================*/

/* ===========================================================================================This function is for index page lampe event, when you click on the lamp, a box will disapear and a little form will appear, you never know we may need their ideas :D ====================================================================*/
function giveMeIdeas(){
    $('#main-light-lampe').click(function(){
        $('#slide-1').slideUp("slow");
        $('#main-light-lampe').addClass('keep-the-light'); //turning the light on
        $('#on-off').fadeIn(1000);
        $('#slide-2').delay(600).slideDown("slow");
      
        //applying the shadows
        $('.aplly-shadow-1').addClass('shadow-1');
        $('.aplly-shadow-2').addClass('shadow-2'); 
        $('form input,textarea,button').addClass('box-shadow-2');
       
        
    });
}

/* ===========================================================================================This function is for the on/off switch button====================================================================*/

function SwitchLight(){
    $('#switch-button').change(function() {
      $('#main-light-lampe').toggleClass('keep-the-light');
      $('.aplly-shadow-1').toggleClass('shadow-1');
      $('.aplly-shadow-2').toggleClass('shadow-2'); 
      $('#ideas-form input,textarea,button').toggleClass('box-shadow-2');
    });
    }  

/* ===========================================================================================this function is for applying effects on an element ====================================================================*/


function addEffect(selector,effect,duration){
        switch(effect){
            case "fadeIn": $(selector).fadeIn(duration);
                break;
            case "fadeOut": $(selector).fadeOut(duration);
                break;
            case "slideUp": $(selector).slideUp(duration);
                break;
            case "slideDown": $(selector).slideDown(duration);
                break;
            case "hide": $(selector).hide(duration);
                break;
            case "show": $(selector).show(duration);
                break;
            case "toggle": $(selector).toggle(duration);
                break;
            default: console.log("you wrote " + effect + "are you sure?"); 
        }
}
/* ===========================================================================================Rocket lunching button event function ====================================================================*/

function countDown(){
    var counter = 3;
   var x = setInterval(function(){   
     $("#block-2").text(counter);
    counter--;
    console.log(counter);
   if(counter === -1) { 
        $("#block-2").text("go!");
        $("#block-2").fadeOut(1000);
        clearInterval(x);
        $('.main-goals-img').animate({top:"220px"},1000,function(){
        $('.stick-fire ').fadeIn(300);//rocket fire appears
        $('#rocket-lunch').addClass('animate-rocket-move');//rocket moving
       });
        
   }
       
},1000);
   
}

function lunchRocket(){
    $('#lunch').click(function(){
        setTimeout(fastStarsMove,9000);
        setTimeout(normalStarsMove,33000);
        setTimeout(function(){$('.main-goals-img').hide()},33000);
        $('#rocket-lunch').css('transform','scale(0.8)');
        $('#lunch').animate({opacity:0},"slow");
        $('#block-1').fadeOut(1000);
        $('#block-2').delay(1000).fadeIn(3000);
        countDown();
      
    });
}

var fastStarsMove = function(){
    $('#stars').css('animation','animStar 1s linear infinite');
    $('#stars:after').css('top','500px');
    $('#stars2').css('animation','animStar 4s linear infinite');
    $('#stars2:after').css('top','500px');
    $('#stars3').css('animation','animStar 14s linear infinite');
    $('#stars3:after').css('top','500px');
}

var normalStarsMove = function(){
    $('#stars').css('animation','animStarTop 50s linear infinite');
    $('#stars:after').css('top','2000px');
    $('#stars2').css('animation','animStarTop 100s linear infinite');
    $('#stars2:after').css('top','2000px');
    $('#stars3').css('animation','animStarTop 150s linear infinite');
    $('#stars3:after').css('top','2000px');
}


