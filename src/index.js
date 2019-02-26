// import "./bootstrap/bootstrap.js";
import './styles.scss';
// import "./about.html";


require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');

const $ = require('jquery');
$(document).ready(function(){

    let $slick1 = $('#slick1  .items').slick({
        // dots: true,
        // infinite: true,
        // speed: 1500,
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000

    });
});

