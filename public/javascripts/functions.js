
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

/* ---- for footer moving ----*/
   if(wScroll > $('.blog-posts').offset().top - $(window).height()) {
  
       var offset = Math.min(0, wScroll - 
                   $('.blog-posts').offset().top + $(window).height() - 350);

       $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'}); 
    
       $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});                

       }

/* ---- for Products moving ---- */
    if(wScroll > $('.thumbnail').offset().top - ($(window).height()/1.1)) {
        $('.thumbnail').each(function(i) {
            setTimeout(function(){
              $('.thumbnail').eq(i).addClass('is-showing');
            }, 150 * (i+1));
        });
    }


});



