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

    $body.css('height', '400px');

    // let w = $body.width();

    // $body.css('overflow', 'hidden');

    // w = w - $body.width();

    // alert(w);



    function hasVerticalScroll(node) {
      if ( node == undefined ) {
        if ( window.innerHeight )
          return document.body.offsetHeight > innerHeight;
        else
          return document.documentElement.scrollHeight >
              document.documentElement.offsetHeight ||
              document.body.scrollHeight > document.body.offsetHeight;
      }
      else { return node.scrollHeight > node.offsetHeight; }
    }

    // Пример (если не передать параметр node — то проверит у body)
    hasVerticalScroll();








    let $windowState = "";


    $window.on('resize', () => {

        var height_document = $(document).height(); 
        var height_client = document.body.clientHeight; 
         
        // if(height_document > height_client) { 
        //     alert('огого'); 
        // } 

        $windowState = $window.width() + 'px <br>' + breakPoints.onPoint()['size']+ ' <br>';
        $windowState += ($window.width() + 18) + 'px <br>';
        // $windowState += '<br>' + height_document + '<br>' + height_client;
        $windowState += '<br> window.innerWidth ' + window.innerWidth ;
        $windowState += '<br> window.outerWidth ' + window.outerWidth ;

        $display.html($windowState);
        // $display.html("sdsfdg");
    });

    // console.log(breakPoints.onPoint());

    // hoverDir();

    // var elements = document.querySelectorAll('#hovt');


    // hoverDir(elements, {
    //     speed: 500,
    //     hoverElem: 'div'
    // });



    // $window.on('breakPointChange', function(){

    //     alert(breakPoints.onPoint()['size']);
    // })



    // var height_document = $(document).height(); 
    // var height_client = document.body.clientHeight; 
     
    // if(height_document > height_client) { 
    //     alert('огого'); 
    // } 


});
 

// breakPoints.init({

// 	a : 500,
// 	b : 900,
// 	c : 1000

// });

