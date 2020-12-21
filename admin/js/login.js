/**login animation**/

$(".flip-change").click(function() {
    $(".login-form").removeClass('show');
    $(".login-txt").css({
        'display': 'none'
    });
    $(".forgot-form").addClass('show');
    $(".forgot-txt").fadeIn('slow');
});    
$(".flip-back").click(function() {
    $(".forgot-form").removeClass('show');
    $(".forgot-txt").css({
        'display': 'none'
    });
    $(".login-form").addClass('show');
    $(".login-txt").fadeIn('slow');
});  

/**error alert**/

	function common_msg(common){
		$(common).addClass("show-error");
		setTimeout(function(){$(common).removeClass("show-error");}, 4000);
	}

