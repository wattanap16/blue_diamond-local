
/* ---- function for Parallax ---- */

$(window).scroll(function() {
   var wScroll = $(this).scrollTop();
console.log(wScroll);

/* ---- for header parallax ----*/
   $('.logo').css({
       'transform' :'translate(0px, ' + wScroll / 2 + '%)'
   });

   $('.back-diamond').css({
    'transform' :'translate(' + wScroll / 6 + '%, ' + wScroll / 7 + '%)'
   });

   

   $('.fore-diamond').css({
    'transform' :'translate(-' + wScroll / 20 + '%, -' + wScroll / 17 + '%)'
   });

/* ---- for Products moving ---- */
if(wScroll > $('.thumbnail').offset().top - ($(window).height()/1.1)) {
    $('.thumbnail').each(function(i) {
        setTimeout(function(){
          $('.thumbnail').eq(i).addClass('is-showing');
        }, 150 * (i+1));
    });
}


/* ---- for disPlay1 moving ----*/
   if(wScroll > $('.blog-display1s').offset().top - $(window).height()) {
  
       var offset = Math.min(0, wScroll - 
                   $('.blog-display1s').offset().top + $(window).height() - 350);

       $('.display1-1').css({'transform':
        'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'}); 
    
       $('.display1-3').css({'transform': 
       'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});                

       }


/* ---- for disPlay2 moving ----*/
/*if(wScroll > $('.blog-display2s').offset().top - $(window).height()) {
    
         var offset = Math.min(0, wScroll - 
                     $('.blog-display2s').offset().top + $(window).height() - 350);
  
         $('.display2-1').css({'transform':
          'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'}); 
      
         $('.display2-3').css({'transform': 
         'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});                
  
         }
*/
         if(wScroll > $('.blog-display2s').offset().top - $(window).height()) {
            
                 var offset = Math.min(0, wScroll - 
                             $('.blog-display2s').offset().top + $(window).height() - 350);
          
                 $('.display2-1').css({'transform':
                  'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'}); 
              
                 $('.display2-3').css({'transform': 
                 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});                
          
                 }


/* ---- for disPlay3 moving ----*/
if(wScroll > $('.blog-display3s').offset().top - $(window).height()) {
    
         var offset = Math.min(0, wScroll - 
                     $('.blog-display3s').offset().top + $(window).height() - 350);
  
         $('.display3-1').css({'transform':
          'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'}); 
      
         $('.display3-3').css({'transform': 
         'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});                
  
         }         

});



