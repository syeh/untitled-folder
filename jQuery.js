$(document).ready(function() {
	$('.bc').on('mouseenter', function(event){
			event.preventDefault();
			$('.headline').hide();
			$(this).find('.arrow-left').show();
			$('.bcheadline').show();
	});	

	$('.bc').on('mouseleave', function(event){
			event.preventDefault();
			$(this).find('.arrow-left').hide();
			$('.bcheadline').hide();
			$('.headline').show();
	});	
	$('.hr').on('mouseenter', function(event){
			event.preventDefault();
			$('.headline').hide();
			$(this).find('.arrow-left2').show();
			$('.hrheadline').show();
	});	

		$('.hr').on('mouseleave', function(event){
			event.preventDefault();
			$(this).find('.arrow-left2').hide();
			$('.hrheadline').hide();
			$('.headline').show();
	});	

		$('.cf').on('mouseenter', function(event){
			event.preventDefault();
			$('.headline').hide();
			$(this).find('.arrow-right').show();
			$('.cfheadline').show();
	});	

		$('.cf').on('mouseleave', function(event){
			event.preventDefault();
			$(this).find('.arrow-right').hide();
			$('.cfheadline').hide();
			$('.headline').show();
	});	

});