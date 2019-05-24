/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parts/autoSlider.js":
/*!*********************************!*\
  !*** ./src/parts/autoSlider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function autoSlider() {

}

module.exports = autoSlider;

/***/ }),

/***/ "./src/parts/popupGift.js":
/*!********************************!*\
  !*** ./src/parts/popupGift.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupGift() {
    let overlayGift = document.querySelector('.popup-gift'),
        giftImg = document.querySelector('.fixed-gift'),
        close = document.querySelector('.popup-gift > .popup-dialog > .popup-content > .popup-close');

giftImg.addEventListener('click', () => {
    giftImg.style.display = 'none';
    overlayGift.style.display = 'block';

    window.addEventListener('click', (e) => {
        if (e.target === overlayGift) {
            overlayGift.style.display = 'none';
        }
    });

    close.addEventListener('click', () => {
        overlayGift.style.display = 'none';
    });
});




}
    
module.exports = popupGift;

/***/ }),

/***/ "./src/parts/scrollGift.js":
/*!*********************************!*\
  !*** ./src/parts/scrollGift.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollGift() {

let overlayGift = document.querySelector('.popup-gift'),
        giftImg = document.querySelector('.fixed-gift'),
        close = document.querySelector('.popup-gift > .popup-dialog > .popup-content > .popup-close'),
        n = 0;

    window.onscroll = function() {  
        if ((document.documentElement.clientHeight + document.documentElement.scrollTop ) >= document.body.clientHeight) {
            giftImg.style.display = 'none';
            overlayGift.style.display = 'block';
            close.addEventListener('click', () => {
                overlayGift.style.display = 'none';
            });
            window.addEventListener('click', (e) => {
                if (e.target === overlayGift) {
                    overlayGift.style.display = 'none';
                }
            });
            window.onscroll = null;
            
        }
        

    };
    

}

module.exports = scrollGift;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.feedback-slider-item'),
    prev = document.querySelector('.main-prev-btn'),
    next = document.querySelector('.main-next-btn');

showSlides(slideIndex);
let timer = setInterval(autoSlider, 5000);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display= 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function autoSlider() {
   
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach((item) => item.style.display= 'none');
    slides[slideIndex - 1].style.display = 'block';
    slideIndex++;
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlide(-1);
    clearInterval(timer);
});

next.addEventListener('click', () => {
    plusSlide(1);
    clearInterval(timer);
});


}

module.exports = slider;

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let autoSlider = __webpack_require__(/*! ./parts/autoSlider.js */ "./src/parts/autoSlider.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js"),
        scrollGift = __webpack_require__(/*! ./parts/scrollGift.js */ "./src/parts/scrollGift.js"),
        popupGift = __webpack_require__(/*! ./parts/popupGift.js */ "./src/parts/popupGift.js");

    autoSlider();
    slider();
    popupGift();
    scrollGift();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map