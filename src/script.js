window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let autoSlider = require('./parts/autoSlider.js'),
        slider = require('./parts/slider.js'),
        scrollGift = require('./parts/scrollGift.js'),
        popupGift = require('./parts/popupGift.js'),
        popupConsultation = require('./parts/popupConsultation.js'),
        popupDesign = require('./parts/popupDesign.js'),
        moreStyles = require('./parts/moreStyles.js'),
        minConsultation = require('./parts/minConsultation.js');

    autoSlider();
    slider();
    popupGift();
    scrollGift();
    popupConsultation();
    popupDesign();
    moreStyles();
    minConsultation();
});