//scrollValue to know position on the screen
var scrollValue = 0;
//noRepeatDown and noRepeatTop are made to avoid executing class change each time we scroll down
var noRepeat = true;



function main(){
   scrollDetect();
    
}
$(document).ready(main);

function scrollDetect(){

   $(document).on('scroll',function(){
       var newScrollValue = $(this).scrollTop();
       if(newScrollValue === 0 && noRepeat === true){
           $('#main-nav-list').addClass('bg-dark').removeClass('color-custom');
           $('.custom-font-color').css('color','white');
       }
       if(newScrollValue> scrollValue){ // we're sliding down
           if(noRepeat === true){
           $('#main-nav-list').addClass('.hidden').removeClass('bg-dark'); /*this line is for making navbar fadeOut since fadeOut() didn't work for reasons that i ignore, so i used css transition to make it work*/
           //this one is for avoiding doing the action again
           noRepeat = false;
           }
       }else{
           if(noRepeat=== false){ // we're sliding up
            $('#main-nav-list').addClass('color-custom').removeClass('hidden'); /*making navbar appear again and making it's background color white*/
            $('.custom-font-color').css('color','black'); //this one is for changing bootstrap default color to black
            noRepeat = true;  //this one is for avoiding doing the action again
           }
       }
       scrollValue= newScrollValue;
   })
  
    
}