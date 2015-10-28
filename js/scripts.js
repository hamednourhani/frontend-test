
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

	$('a#menu-toggler').click(function(){
		console.log('click on menu toggler');
		var responsive_container = $('div#responsive-menu');
		var close_button = responsive_container.children('a#close-responsive');
		var body_wrapper = $('.body-wrapper');
		var menu_height = $(window).height();
		responsive_container.css('height',menu_height).addClass('show-menu');
		

		close_button.click(function(event){
			//event.stopPropagination();
			responsive_container.removeClass('show-menu');
		});

		// body_wrapper.click(function(event){
		// 	event.stopPropagination();
		// 	responsive_container.removeClass('show-menu');

		// });
	});
	
});	
		