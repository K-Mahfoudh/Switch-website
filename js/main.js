//scrollValue to know position on the screen
var scrollValue = 0;
//noRepeatDown and noRepeatTop are made to avoid executing class change each time we scroll down
var noRepeat = true;



function main(){
   scrollDetect();
   giveMeIdeas();
    SwitchLight()
    
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
var on = true;
function SwitchLight(){
    $('#switch-button').change(function() {
      $('#main-light-lampe').toggleClass('keep-the-light');
      $('.aplly-shadow-1').toggleClass('shadow-1');
      $('.aplly-shadow-2').toggleClass('shadow-2'); 
      $('form input,textarea,button').toggleClass('box-shadow-2');
    });
    }  

