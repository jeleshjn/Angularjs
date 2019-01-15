$(document).ready(function(){
	$(".lb-1").click(function(){
		$(".lb-content").hide();
		$(".pop-up-main").fadeIn();
		var relVal = $(this).attr("rel");
		$('#'+ relVal).show();
		$('.list-views').hide();
		$('.high-periority').hide();
		window.location.hash = relVal;
	});
	$(".back-btn").click(function(){
		$(".pop-up-main").fadeOut();
		$(".lb-content").hide();
		$('.list-views').show();
		$('.high-periority').show();
		window.location.hash = '';
	});		
});