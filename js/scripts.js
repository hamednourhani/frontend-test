
jQuery(document).ready(function($){
	
	// setTimeout(function(){ 
	// 	window.loading_screen.finish();
	//  }, 1000);

	// $('nav.main-menu').scrollToFixed({
	// 	minWidth : 945,
	// });

   $( '#gallery-slideshow' ).sliderPro({
		width: 960,
		height: 500,
		fade: true,
		arrows: true,
		buttons: false,
		fullScreen: true,
		shuffle: true,
		smallSize: 500,
		mediumSize: 1000,
		largeSize: 3000,
		thumbnailArrows: true,
		autoplay: false
	});

   

   $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      autoHeight: false,
      heightStyle: "content",
    });

   	var responsive_container = $('nav#header-nav');
	$('a#menu-toggler').click(function(){
		
		responsive_container.slideToggle();
		

		
	});
	
});	
		