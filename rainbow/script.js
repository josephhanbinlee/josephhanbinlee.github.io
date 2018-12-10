$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".mainmenu").css("background-color" , "rgb(192,217,51, 0.95)");
          $("#icon").css("width", "100px");
          $(".mainmenu li").css('font-size', '17px');
	  }

	  else{
		  $(".mainmenu").css("background-color" , "transparent"); 
          $("#icon").css("width", "150px");
          $(".mainmenu li").css('font-size', '20px');
	  }
  })
})