jQuery(document).ready(function($){
  
  'use strict';
  
  //=================================== Nav Responsive ===================================//
  $('#menu').tinyNav({
      active: 'selected'
  });

  //=================================== Nav Superfish ====================================//
    jQuery(document).ready(function() {
    jQuery('ul.sf-menu').superfish();
  });

  //=================================== Text rotate ====================================//
  $(".text_rotate .rotate").textrotator({
    animation: "fade",
    speed: 1600
  });

  //=================================== Slider  ===================================//
  $("#slider1").responsiveSlides({
    speed: 900,
    pause:true
  });
  
  $("#slider2").responsiveSlides({
    speed: 1000
  });
  
  $(".news_slider").responsiveSlides({
    speed: 1000
  });
  
  $(".blog_slider").responsiveSlides({
    speed: 800
  });
  
  //=================================== Totop  ===================================//
  $().UItoTop({
    scrollSpeed:500,
    easingType:'linear'
  });

  //=================================== Twitter Feed  ======================================//
  $(".twitter").tweet({
        modpath: 'js/twitter/index.php',
        username: "envato",
        count: 5,
        loading_text: "Loading tweets...",
    });

  //=================================== Testimonials  =====================================//
  $(".testimonials").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    singleItem:true,
    stopOnHover : true
  });
  
  //=================================== Carousels Footer  =================================//
  $(".tweet_list").owlCarousel({
    autoPlay: 4000,      
    items : 1,
      navigation: false,
      pagination: true, 
    singleItem: true
  });

  //=================================== Slider  ===================================//
  $("#carrousel_topic").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    pagination: false,
    navigation: true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsMobile : [688,1],
    stopOnHover : true
  });

  //=================================== Slider  ===================================//
  $(".slides-carousel").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items : 5,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    stopOnHover : true
  });

  //=================================== Slider  ===================================//
  $(".gallery_blog").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsMobile : [560,1],
    stopOnHover : true
  });

  //=================================== Slider  ===================================//
  $("#news_carrousel").owlCarousel({
    autoPlay: 7000, //Set AutoPlay to 3 seconds
    items : 3,
    pagination: false,
    navigation: true,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsMobile : [688,1],
    stopOnHover : true
  });

  //=================================== Slider  ===================================//
  $("#news_carrousel_blog").owlCarousel({
    utoPlay: 7000, //Set AutoPlay to 3 seconds
    items : 2,
    pagination: false,
    navigation: true,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsMobile : [560,1],
    stopOnHover : true
  });

  //=================================== Carousel Players  ==================================//
   $("#team-carousel").owlCarousel({
       autoPlay: 3200,      
       items : 5,
       navigation: false,
       itemsDesktopSmall : [1024,3],
       itemsTablet : [768,3],
       itemsMobile : [600,2],
       pagination: true,
       stopOnHover : true
   });
  //=================================== Slider  ===================================//
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 200,
      slideshow: true, 
      itemMargin: 1,
      minItems: 1,
      maxItems: 1
    });
  //=================================== Submit Form  ===================================//
  $('#form').submit(function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var datos = $(this).serialize();
    $.get(url, datos, function(resultado){
      $('#result').html(resultado);
    });
  }); 
  
  //=================================== Subtmit Form Newslleter ===========================//
  $('#newsletterForm').submit(function(event) {  
        event.preventDefault();  
        var url = $(this).attr('action');
        var datos = $(this).serialize();  
         $.get(url, datos, function(resultado) {  
          $('#result-newsletter').html(resultado);  
    });
  });  
  
  //=================================== Tabs defauld  ===================================//
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//=================================== Tabs On Click Event  ===================================//
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});	
	//=================================== Last version of Fancybox V2  ===================================//
	$('.fancybox').fancybox();
  $("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
    'easingIn': 'easeOutBack',
    'easingOut':'easeInBack',
		'speedIn':'700',
		'centerOnScroll'	: true,
		'titlePosition'     : 'over'
	});  
  //=================================== Accordion  ===================================//
	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});   	
	//=================================== Tooltips =====================================//
	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}
  //=========================== Effect Animations Scroll ============================//
  $(window).scroll(function() {

    $('.central_content').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
          $(this).addClass("animated fadeInUp").css("opacity", "1");
      }
    });

  });

  //=================================== Counter  ==============================//
   $('#event-one').countdown('2014/12/12', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });

   $('#event-two').countdown('2014/09/10', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
   $('#event-three').countdown('2014/12/24', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
  

});	