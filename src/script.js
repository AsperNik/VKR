window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let autoSlider = require('./parts/autoSlider.js'),
        slider = require('./parts/slider.js'),
        scrollGift = require('./parts/scrollGift.js'),
        popupGift = require('./parts/popupGift.js');

    autoSlider();
    slider();
    popupGift();
    scrollGift();
});