$(function(){

	$(window).scrollTop(0);
	
	
	
	$('#topabout').click(function(e){
		$('html').animate({scrollTop: $('#footcredit').offset().top}, 1000)
		return false;
	});

	$('#topcontact').click(function(e){
		$('html').animate({scrollTop: $('.contact').offset().top}, 1000)
		return false;
	});

	$('.tophome').click(function(e){
		$('html').animate({scrollTop: 0}, 1000)
		return false;
	});

	

	


	$('.nutlen').click(function(event) {
		$('html').animate({scrollTop: 0}, 'slow');
	});

	
})
