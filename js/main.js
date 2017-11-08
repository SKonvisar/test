$(document).ready(function(){
	$(window).scroll(function(){
		var $head = $('#header');
		if($(window).scrollTop() > $head.offset().top()){
			$head.addClass("headerFixed");
		} else {
			$head.remoteClass('headerFixed');
		}
	})
})