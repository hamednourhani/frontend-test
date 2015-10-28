
jQuery(document).ready(function($){
	
	
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

	$('li#rent-menu').click(function(){
		$('body').removeClass('buy commercial').addClass('rent');
		$(this).css('background-color','#1979B3');
		$('li#buy-menu').css('background-color','#484A5F');
		$('li#commercial-menu').css('background-color','#484A5F');
	});

	$('li#buy-menu').click(function(){
		$('body').removeClass('rent commercial').addClass('buy');
		$(this).css('background-color','#C71F40');
		$('li#rent-menu').css('background-color','#484A5F');
		$('li#commercial-menu').css('background-color','#484A5F');
	});

	$('li#commercial-menu').click(function(){
		$('body').removeClass('rent buy').addClass('commercial');
		$(this).css('background-color','#309F53');
		$('li#rent-menu').css('background-color','#484A5F');
		$('li#buy-menu').css('background-color','#484A5F');
	});

	
	
});	
		