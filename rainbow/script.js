$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".mainmenu").css("background-color" , "rgb(192,217,51, 0.95)");
	  }

	  else{
		  $(".mainmenu").css("background-color" , "transparent");  	
	  }
  })
})