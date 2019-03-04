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

    // console.log(breakPoints.onPoint());

    // hoverDir();

    var elements = document.querySelectorAll('#hovt');


    hoverDir(elements, {
        speed: 500,
        hoverElem: 'div'
    });








});
 

// breakPoints.init({

// 	a : 500,
// 	b : 900,
// 	c : 1000

// });

