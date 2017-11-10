var button = document.querySelector(".hamburger");
var menu = document.getElementById('mnu');

button.addEventListener('click', function(){
	button.classList.toggle('is-active');
	menu.classList.toggle('open');
});

$(document).ready(function() {
   	$(window).scroll(function(){
		var $head = $('#header');
		if($(window).scrollTop() > 100){
			$head.addClass("fixed");
		} else {
			$head.removeClass('fixed');
		}
	});

   	$('.price_text button').on('mouseenter',function(){
   		$('.price_top span').addClass('hovered');
   	});
   	$('.price_text button').on('mouseleave',function(){
   		$('.price_top span').removeClass('hovered');
   	});
});