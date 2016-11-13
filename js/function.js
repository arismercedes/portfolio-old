
$( window ).resize(function() {
$window = $(window);
if( $window .width() >768){
	
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$('.slogan').css({
			'transform' : 'translate(0px, '+ wScroll /14 +'%)'
		});
		
		$('.trees').css({
			'transform' : 'translate(0px, '+ wScroll /20 +'%)'
		});
		
		$('.back-buildings').css({
			'transform' : 'translate(0px, '+ wScroll /50 +'%)'
		});
		
		$('.shops').css({
			'transform' : 'translate(0px, '+ wScroll /100 +'%)'
		});
		
		$('.middle-clouds').css({
			'transform' : 'translate(0px, '+ wScroll /300 +'%)'
		});
		
		$('.front-clouds').css({
			'transform' : 'translate(0px, '+ wScroll /90 +'%)'
		});
	});	
	
}
});

$(document).ready(function(){
$window = $(window);
if( $window.width() >768){
// Cache the Window object

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$('.slogan').css({
			'transform' : 'translate(0px, '+ wScroll /15 +'%)'
		});
		
		$('.trees').css({
			'transform' : 'translate(0px, '+ wScroll /20 +'%)'
		});
		
		$('.back-buildings').css({
			'transform' : 'translate(0px, '+ wScroll /40 +'%)'
		});
		
		$('.shops').css({
			'transform' : 'translate(0px, '+ wScroll /60 +'%)'
		});
		
		$('.middle-clouds').css({
			'transform' : 'translate(0px, '+ wScroll /100 +'%)'
		});
		
		$('.front-clouds').css({
			'transform' : 'translate(0px, '+ wScroll /30 +'%)'
		});
		
	});	
}
});	