

$(document).ready(function(){
	'use strict';
	
    $(".loading").fadeOut(2000,function(){
    $('body').css("overflow", "visible");
    
}); 
    
 $("html").niceScroll({cursorwidth: '10px', autohidemode: true, zindex: 9999999999999999 ,cursorcolor : "#38a3dc" });


        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });


      
        $(window).on("scroll", function () {
		var sc = $(window).scrollTop(),
            wids= $(window).width();
        

        if(sc > 500){
			$(".scroll").fadeIn(1000);
		
		}else{
			$(".scroll").fadeOut(1000);
		}

        if(wids <767){
           $(".copyright").css({ display : "block"}); 
        }
	});
    
      
        
        
        


});








