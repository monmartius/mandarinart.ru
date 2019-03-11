// import "./bootstrap/bootstrap.js";
import './styles.scss';
// import "./about.html";
import 'bootstrap';


require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
const $ = require('jquery');


let breakPoints = require('./js/breakpoints.js');
let hoverDir = require('hover-dir');


$(document).ready(function(){

    let $slick1 = $('#slick1 .items').slick({
        // dots: true,
        // infinite: true,
        // speed: 1500,
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000

    });
 
    let $slick2 = $('#slick2 .items').slick({
	    // dots: true,
	    // infinite: true,
	    // speed: 1500,
	    slidesToShow: 1,
	    // autoplay: true,
	    // autoplaySpeed: 3000

	});

	


    let $slick3 = $('#slick3 .items').slick({
	    // dots: true,
	    // infinite: true,
	    // speed: 1500,
	    slidesToShow: 1,
	    // autoplay: true,
	    // autoplaySpeed: 3000

	});





    breakPoints.init();

    let $display = $('#display')
        .css('font-size','20px')
        .css('color','red')
        .css('text-align','center');
    let $window = $(window);

    let $body = $('body');


    // let w = $body.width();

    // $body.css('overflow', 'hidden');

    // w = w - $body.width();

    // alert(w);










    let $windowState = "";


    $window.on('resize', () => {

        var height_document = $(document).height(); 
        var height_client = document.body.clientHeight; 
         
        // if(height_document > height_client) { 
        //     alert('огого'); 
        // } 

        $windowState = $window.width() + 'px <br>' + breakPoints.onPoint() + ' <br>';
        $windowState += ($window.width() + 18) + 'px <br>';
        // $windowState += '<br>' + height_document + '<br>' + height_client;
        $windowState += '<br> window.innerWidth ' + window.innerWidth ;
        $windowState += '<br> window.outerWidth ' + window.outerWidth ;

        $display.html($windowState);
        // $display.html("sdsfdg");
    });

    let $menuToggle = $('#menu-toggle');

    let $menu = $('ul.menu');

    $menuToggle.on('click', function(){

        $menuToggle.toggleClass('active');
		$menu.slideToggle();        
    });



});