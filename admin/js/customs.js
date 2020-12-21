	// menu button
      $(document).ready(function(){
          $(".menu-button").click(function(){
            $(".wrapper").toggleClass("open");
            $("body").toggleClass("no-scroll");
          });

          $(document).on('click', function(event) {
			    if (!$(event.target).closest('.menu-button').length) {
			        $(".wrapper").removeClass("open");
			        $("body").removeClass("no-scroll");

			    }
			});
      });

      // end 
   

   $(".navdrop").click(function() {
    if ($(this).hasClass("show-menu")) {
        $(".navdrop").removeClass("show-menu");
    } else {
        $(".navdrop").removeClass("show-menu");
        $(this).addClass("show-menu");
    }
	});

	$(document).on('click', function(event) {
	    if (!$(event.target).closest('.navdrop').length) {
	        $(".navdrop").removeClass("show-menu");

	    }
	});

	$(".child-menu a").click(function(){
		$(this).toggleClass("current ");
		$(this).siblings('.menu-wrap').slideToggle();

	});
	$(".sub-child a").click(function(){
		$(this).toggleClass("current1 ");
		$(this).siblings('ul').slideToggle();		
	});

	
	if($(".sub-child ul a").hasClass("active")){
		$(".sub-child > a").addClass("current1  active")
		setTimeout(function(){$(".sub-child ul").slideDown();}, 600);
	}



/**pop up**/	
		
	function common_popup(common){
		setTimeout(function(){$(".modal-window-wrapper").addClass("modal-wrapper-visible");}, 100);
		setTimeout(function(){$(common).addClass("modal-window-visible");}, 100);	
		setTimeout(function(){$(common).addClass("modal-window-visible1");}, 200);
		setTimeout(function(){$("body").addClass("no-scroll");}, 100); 
	}	
	$('.modal-window-wrapper').on('click', function(e) {
		  if (e.target == this){

			setTimeout(function(){$(".modal-window-wrapper").removeClass("modal-wrapper-visible");}, 300);
			setTimeout(function(){$(".modal-window").removeClass("modal-window-visible");}, 200);	
			setTimeout(function(){$(".modal-window").removeClass("modal-window-visible1");}, 100);
			setTimeout(function(){$("body").removeClass("no-scroll");}, 200);  
		
		  return;
	  }
	 });

	function close_pop()
	{
		setTimeout(function(){$(".modal-window-wrapper").removeClass("modal-wrapper-visible");}, 300);
		setTimeout(function(){$(".modal-window").removeClass("modal-window-visible");}, 200);	
		setTimeout(function(){$(".modal-window").removeClass("modal-window-visible1");}, 100);
			
		setTimeout(function(){$("body").removeClass("no-scroll");}, 200);  

	}	

    $(".cancel_cp").click(function(){
		setTimeout(function(){$(".cropper-wrapper").removeClass("modal-wrapper-visible");}, 300);
		setTimeout(function(){$(".cropper-window").removeClass("modal-window-visible");}, 200);		
		setTimeout(function(){$(".cropper-window").removeClass("modal-window-visible1");}, 100);
		setTimeout(function(){$("body").removeClass("fix-scroll");}, 200);	
    });





/*alert message*/

	function common_alert(common){
		$(".alert_message").addClass("animated");
		setTimeout(function(){$(".alert_message").removeClass("animated");},2500);					
	};

	function toggle_slide(){
		setTimeout(function(){$(".wrapper").toggleClass("sidebar-min");}, 0);
	}


/*tooltip*/
$('.custom-tooltip').hover(function(){
		var title = $(this).attr('data-name');
	 	$(this).append('<span class="tooltip">'+ title + '</span>').fadeIn('slow');;
	},function() {$('.tooltip').remove();
});



/**drop down**/

//notification and message drop down //
$(".nav-link-common").click(function(){ 
	if($(".nav-profile").hasClass("show")){
		$(".nav-profile").addClass("show-hide");
	}

	setTimeout(function() {$(".notification-dropdown").removeClass("show1");}, 100);
	setTimeout(function() {$(".notification-dropdown").removeClass("show");}, 180);	
	$(".nav-profile").removeClass("show");
	var self = this;
	var self_1 = this;
	setTimeout(function() {$(self).parent().addClass("show");}, 200);
	setTimeout(function() {$(self_1).parent().addClass("show1");}, 300);	

});

$(document).on('click', function(event) { 
	if (!$(event.target).closest('.nav-link-common').length) {
		setTimeout(function() {$(".notification-dropdown").removeClass("show1");}, 100);
		setTimeout(function() {$(".notification-dropdown").removeClass("show");}, 180);	
	}
});


/***nav toggle**/
$(".nav-toggle").click(function(){
	$(".wrapper").toggleClass("sidebar-min");
});

	
	//scroll
	(function($){
		$(window).on("load",function(){
			$(".scroll_custom").mCustomScrollbar({
				mouseWheelPixels: 100	
			});
			
		});
	})(jQuery);




//multicheck box select js

 $('#gotIt').click(function(){
          $('.boxes').addClass('show');
          $('.btnGroup').addClass('show');
          // $('.sorting').hide();
          $('.selectBtn').hide();
              
      });
      $('#remove').click(function(){
          $('.boxes').removeClass('active');
          $('.boxes').removeClass('show');
          $('.btnGroup').removeClass('show');
          // $('.sorting').show();
          $('.selectBtn').show();
              
      });
      
    
    //creat profile 
	$('.boxes').find('input').change(function() {
	    if ($(this).is(':checked')) {
	        $(this).parent().addClass('active');
	    } else {
	        $(this).parent().removeClass('active');
	    }

	});
         


