$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
    $(window).resize();
}); 
$(document).ready(function(){
	/*___________custom hover____________*/
	var flag = false;
	function checkFlag(){
		if (flag == true){
			$('.ticketsGuide').css('display','block');
			$('.ticketsGuide').animate({ opacity : 1 }, 150);
		}else{
			setTimeout(function(){
				$('.ticketsGuide').css('display','none');
			}, 300);
			$('.ticketsGuide').animate({ opacity : 0 }, 300);
		}
	}
	$('#hidden').mouseenter(function() {
		flag = true;
		checkFlag();
	});
	$('#hidden').mouseleave(function() {
		flag = false;
		checkFlag();
	});
	/*____________additional task_____________*/
	$('#chb').click(function() {
		if (this.checked){
			$('#returnDate').removeClass("inactiveDate");
			$('.hideMark').animate({ opacity : 0 }, 10);

		}else{
			$('#returnDate').addClass("inactiveDate");
			$('.hideMark').animate({ opacity : 1 }, 10);
		}
	});
	$(window).resize(function(){
		if(screen.width<630){
			$('.note').animate({ opacity : 1 }, 300);
			console.log("min");
		} else if(screen.width>=630){
			$('.note').animate({ opacity : 0 }, 300);
			console.log("else");
		}
	});
});




