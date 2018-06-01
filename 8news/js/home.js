$(function(){

	$(window).scrollTop(0);


	
	$('#topcontact').click(function(e){
		$('html').animate({scrollTop: $('.contact').offset().top}, 1000)
		return false;
	});

	$('.tophome').click(function(e){
		$('html').animate({scrollTop: 0}, 1000)
		return false;
	});

	$('.topthegioi').click(function(e){
		$('html').animate({scrollTop: 751}, 1000)
		return false;
	});

	$('.topphimanh').click(function(e){
		$('html').animate({scrollTop: 1260}, 1000)
		return false;
	});

	$('.topamnhac').click(function(e){
		$('html').animate({scrollTop: 1260}, 1000)
		return false;
	});

	$('.topcongnghe').click(function(e){
		$('html').animate({scrollTop: 1880}, 1000)
		return false;
	});






	$(window).scroll(function(e) {
		var position = $('html').scrollTop();
		// console.log(position);
	//doi nen menu
	if (position > 180){
		$('.menustopcolor').addClass('doinen');
		
	}else{
		$('.menustopcolor').removeClass('doinen');
	}
	//tin 1
	if (position > 300){
		$('.tin1').addClass('xuathien');
		$('.recentpost').addClass('xuathien');
		$('.nutlen').addClass('hienthi');
	}else{
		$('.tin1').removeClass('xuathien');
		$('.recentpost').removeClass('xuathien');
		$('.nutlen').removeClass('hienthi');
	}
	// tin 2
	if (position > 700){
		$('.tin2').addClass('xuathien');
		$('.popularpost').addClass('xuathien');
	}else{
		$('.tin2').removeClass('xuathien');
		$('.popularpost').removeClass('xuathien');
	}
	// tin 3
	if (position > 1000){
		$('.tin3').addClass('xuathien');

	}else{
		$('.tin3').removeClass('xuathien');

	}
});


	$('.nutlen').click(function(event) {
		$('html').animate({scrollTop: 0}, 'slow');
	});

	
})
