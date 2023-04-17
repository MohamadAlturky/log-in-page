signIn = true;
$('.sign-in-up').click(function (e) { 
    if(signIn) {
        $('.floating-circle').addClass('down'); 
        

        $('#sign-in').addClass('move-up');
        setTimeout(() => {
            $('#sign-in').css('display', 'none');
        }, 1500);

        $('.sign-in-up').fadeOut(500,() =>{
              $('.sign-in-up').html('SIGN IN');
              $('.sign-in-up').fadeIn(500);
          });

         $('#sign-up').removeClass('move-down');
         $('#sign-in').removeClass('return-original-down');

        setTimeout(() => {
            $('#sign-up').css('display', 'block');
            $('#sign-up').addClass('return-original');
        }, 1500);  

        signIn = false;
    }
    else {
        $('.floating-circle').removeClass('down'); 
        
        $('#sign-up').addClass('move-down');
        setTimeout(() => {
            $('#sign-up').css('display', 'none');
        }, 1500);  

        $('.sign-in-up').fadeOut(500,() =>{
              $('.sign-in-up').html('SIGN UP');
              $('.sign-in-up').fadeIn(500);
          });


         $('#sign-in').removeClass('move-up');
         $('#sign-up').removeClass('return-original');


        setTimeout(() => {
            $('#sign-in').css('display', 'block');
            $('#sign-in').addClass('return-original-down');
        }, 1500);  
        signIn = true;
    }
});

var lastWidth = $(window).width();

$(window).on('resize', function() {
    var $circle = $('.floating-circle ');
    if ($(window).height() <= 1005) {
      $circle.addClass('z-index-style');
    } else {
      $circle.removeClass('z-index-style');
    }

    if (lastWidth < 900 && $(window).width() >= 900) {
        $('body').fadeOut(0,function() {
          $('body').fadeIn(1500);
        });
      }
    
      if (lastWidth > 900 && $(window).width() <= 900) {
        $('body').fadeOut(0,function() {
          $('body').fadeIn(1500);
        });
      }
      lastWidth = $(window).width();


      if ($(window).width() <= 1920) {
        
      }
  });






// setTimeout(() =>{
        //     $('.floating-circle').css('top', '-188.5vh');
        // }, 1000);  
        // $('.sign-in-up').fadeOut(500,() =>{
        //     $('.sign-in-up').html('SIGN IN');
        //     $('.sign-in-up').fadeIn(500);
        // });

        // $('#sign-in').fadeOut(500,() =>{
        //     $('#sign-up').css('display', 'none');
        //     $('#sign-up').css('display', 'grid');
        //     $('#sign-up').fadeOut(0);
        //     $('#sign-up').fadeIn(1000);
        // });


        


// setTimeout(() =>{
        //     $('.floating-circle').css('top', '-188.5vh');
        // }, 1000);   
        // $('.sign-in-up').fadeOut(500,() =>{
        //     $('.sign-in-up').html('SIGN UP');
        //     $('.sign-in-up').fadeIn(500);
        // });
        
        
        // // $('.floating-circle').css('top', '-250vh');    
        // $('.sign-in-up').fadeOut(500,() =>{
        //     $('.sign-in-up').html('SIGN UP');
        //     $('.sign-in-up').fadeIn(500);
        // });

        // $('#sign-up').fadeOut(500,() =>{
        //     $('#sign-in').css('display', 'none');
        //     $('#sign-in').css('display', 'grid');
        //     $('#sign-in').fadeOut(0);
        //     $('#sign-in').fadeIn(1000);
        // });