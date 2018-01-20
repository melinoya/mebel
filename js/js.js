$('.wr-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  adaptiveHeight: true,
     pauseOnHover: false,
   
    responsive: [
    {
        breakpoint: 768,
        settings: {
        autoplay: false,
         slidesToShow: 2,
            centerMode: true,
            variableWidth: true
      }
    },
    {
        breakpoint: 480,
        settings: {
        autoplay: false,
        slidesToShow: 1,
            centerMode: true,
            variableWidth: true
      }
    }
       
  ]
});

/*Обратный звонок*/
$(".call").on("click", function(){
    $(".wrapper-form").toggleClass("vis");
});
$(".fa-times-circle").on("click", function(){
    $(".wrapper-form").toggleClass("vis");
});

$('.go').on('click', function(){
    $('.header .menu').css({
        'display' : 'none'
    });
    $('.header .wr-search').css({
        'display' : 'block'
    });
});
$('.close').on('click', function(){
    $('.menu').css({
        'display' : 'block'
    });
    $('.wr-search').css({
        'display' : 'none'
    });
});
$('.go-foot').on('click', function(){
    $('.footer .menu').css({
        'display' : 'none'
    });
    $('.footer .wr-search-foot').css({
        'display' : 'block'
    });
});

$('.go-mob').on('click', function(){

    $('.wr-search-mob').css({
        'display' : 'block'
    });
});


/*$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});*/
$(".fa-bars").on('click', function(){
$(".mobile-mnu").toggleClass("on");
});
$(".close-mnu").on('click', function(){
$(".mobile-mnu").toggleClass("on");
});
/*$(".mobile-item-menu").on('click', function(){
$(".mobile-mnu").toggleClass("on");
});*/
$(".submenu-display").on('click', function(){
$(".submenu").toggleClass("vis");
});

$('li a').each(function () {
if (this.href == location.href) $(this).parent().addClass('active');
});
