$("button").click(function(){
	$(".button").toggle();
});
	$(document).ready(function() {
		$(".item").click(function(){
			$(this).find(".UL2").slideToggle();
			$(this).siblings('.item').find('.UL2').slideUp();
		});
	});
	var a = ($(window).height());
	//	var b =a-30
	$(".mb").css({
		"height": a
	});
	$(".logo1").click(function() {
		console.log("")
		$(".logo1").toggle();
		$(".logo2").toggle();
		$(".mb").toggle();
	});
	$(".mb").click(function() {
		$(".logo1").toggle();
		$(".logo2").toggle();
		$(".mb").toggle();
	});