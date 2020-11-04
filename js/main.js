$(document).ready(function(){




	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});





	var typed=new Typed(".typed",{
		strings:["Wherein herb beginning. Moved after gathering. Sea hi crate fowl man replenish place divided likeness herb one two lnetn Winged moving saw, may over.","Wherein herb beginning. Moved after gathering. Sea hi crate fowl man replenish place divided likeness herb one two lnetn Winged moving saw, may over."],
		typeSpeed:40,
		loop:true,
		startDelay:1000,
		ShowCurser:false
	});


	const nav=$("#navigation");
    const navTop=nav.offset().top;
    $(window).on("scroll",stickyNavigation);
    function stickyNavigation(){
    	var body=$("body");

    	if($(window).scrollTop()>navTop){
    			body.css("padding-top",nav.outerHeight()+"px");
    		body.addClass("fixedNav");
    	}
    	else{
    		body.css("padding-top",0);
    		body.removeClass("fixedNav");
    	}
    };

     $("[data-fancybox]").fancybox();

    $(".items").isotope({

    	filter:'recent',
    	animationOption:{
    		duration:1500,
    		easing:'linear',
    		queue:false
    	}
    });

      $("#filters a").click(function(){
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");
    	var selector=$(this).attr("data-filter");

    	 $(".items").isotope({
    	filter:selector,
    	animationOption:{
    		duration:1500,
    		
    		queue:false
    	}
    });
    	 return false;


    });




 $('.employee-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive:[
        {
            breakpoint: 991,
            settings: {
                dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
            }
        },
        {
             breakpoint: 400,
            settings: {
                dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
            }
            
        }


    ]
});

    

});