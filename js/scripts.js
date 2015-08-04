$(function(){

	var viewPort = $(window).width();
	var deja     = $(".ente");
	var de       = $(".enter");
	var fumar    = $(".enter2");

	if( viewPort >= 320 && viewPort < 480) {
		deja.animate({left:"3.2em"}, 1000);
		de.animate({left:".8em"}, 1500);
		fumar.animate({left:"1.3em"}, 1900);

	}
	if( viewPort >= 480 && viewPort <= 768) {
		deja.animate({left:"4em"}, 1000);
		de.animate({left:"1em"}, 1300);
		fumar.animate({left:"1.5em"}, 1500);
	}
	if (viewPort >= 960 && viewPort <= 1400){
		deja.animate({left:"5.5em"}, 1000);
		de.animate({left:"2em"}, 1300);
		de.animate({left:"0"}, 1500);
		fumar.animate({left:"1em"}, 1500);
		fumar.animate({left:"0"}, 1900);
		$(".nuevo").animate({top:"24em"}, 3000);
		$(".container--formulario").animate({right:"1.5em"}, 3100);
	}
	if (viewPort > 1400) {
		deja.animate({left: "5.8em"},1000);
		de.animate({left:"2em"}, 1300);
		de.animate({left:"0"}, 1500);
		fumar.animate({left:"1em"}, 1500);
		fumar.animate({left:"0"}, 1900);
		$(".nuevo").animate({top:"24em"}, 3000);
		$(".container--formulario").animate({right:"1.5em"}, 3100);
	}
	

	$("#btn").on("click", function(){

		$("body,html").animate({scrollTop:0}, 1000 );
	});
});
