$( document ).ready(function() {
	$(".mobile-menu").click(function () {
	    $(".overlay").toggleClass('view-overlay');
	    $(".burger-menu").toggleClass('change');
	});

	$('.slogan').height($('.slogan').width());

	$(function(){
		var wall = new Freewall('#gallery');
		wall.reset({
	      selector: '.item',
	      animate: true,
	      fixSize: 0,
	      gutterY: 0,
	      gutterX: 0,
	      cellW: 160,
	      cellH: 160,
	      rightToLeft: true,
	      onResize: function() {
	        wall.fitWidth();
	      }
	    });
		wall.fitWidth();
	});

	
});

window.sr = ScrollReveal();
sr.reveal('.from-bottom', { duration: 1200 });
sr.reveal('.desc-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.recipe-from-bottom', { duration: 700 }, 250 );
sr.reveal('.step-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.step-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 550 );
sr.reveal('.square-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 350 );