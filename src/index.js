// import "./bootstrap/bootstrap.js";
import './styles.scss';
// import "./about.html";



require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


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

// hoverDir();

    var elements = document.querySelectorAll('#hovt');

    console.log(elements);
    
    // hoverDir(elements);
    
    // // or with custom options
    hoverDir(elements, {
        speed: 500,
        hoverElem: 'div'
    });


});

