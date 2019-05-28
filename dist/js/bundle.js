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

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        price = document.querySelector('.calc-price');

    
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/minConsultation.js":
/*!**************************************!*\
  !*** ./src/parts/minConsultation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function minConsultation() {
    let overlayConsultation = document.querySelector('.popup-consultation'),
        overlayDesign = document.querySelector('.popup-design'),
        overlayGift = document.querySelector('.popup-gift'),
        close = document.querySelector('.popup-consultation > .popup-dialog > .popup-content > .popup-close'),
        giftImg = document.querySelector('.fixed-gift');

    
        setTimeout(function() {
            if (overlayConsultation.style.display != 'block' && overlayDesign.style.display != 'block' && overlayGift.style.display != 'block'){
                overlayConsultation.style.display = 'block';  
                giftImg.style.display = 'none';
        
                close.addEventListener('click', () => {
                    overlayConsultation.style.display = 'none';
                    document.body.style.overflow = '';
                    giftImg.style.display = 'block';
                });
        
                window.addEventListener('click', (e) => {
                    if (e.target === overlayConsultation) {
                        overlayConsultation.style.display = 'none';
                        giftImg.style.display = 'block';
                    }
                });
            }
        }, 60000);
  
}

module.exports = minConsultation;

/***/ }),

/***/ "./src/parts/moreStyles.js":
/*!*********************************!*\
  !*** ./src/parts/moreStyles.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function moreStyles() {
    let btn = document.querySelector('.button-styles'),
        stlBlocks = document.querySelectorAll('.hidden-lg.hidden-md.hidden-sm.hidden-xs.styles-2');


    btn.addEventListener('click',  () => {
        for (i = 0; i < stlBlocks.length; i++) {
            stlBlocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2'); 
            stlBlocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            btn.style.display = 'none';
        }
    });

}

module.exports = moreStyles;

/***/ }),

/***/ "./src/parts/popupConsultation.js":
/*!****************************************!*\
  !*** ./src/parts/popupConsultation.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupConsultation() {
    let overlayConsultation = document.querySelector('.popup-consultation'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        close = document.querySelector('.popup-consultation > .popup-dialog > .popup-content > .popup-close'),
        giftImg = document.querySelector('.fixed-gift');
    
    function modalWindow(a) {
        for (let k of a) {
            k.addEventListener('click',  () => {
                overlayConsultation.style.display = 'block';  
                giftImg.style.display = 'none';
            });
    
            close.addEventListener('click', () => {
                overlayConsultation.style.display = 'none';
                document.body.style.overflow = '';
                giftImg.style.display = 'block';
            });

            window.addEventListener('click', (e) => {
                if (e.target === overlayConsultation) {
                    overlayConsultation.style.display = 'none';
                    giftImg.style.display = 'block';
                }
            });
        }
    }
    
    modalWindow(buttonConsultation);


}
    
module.exports = popupConsultation;

/***/ }),

/***/ "./src/parts/popupDesign.js":
/*!**********************************!*\
  !*** ./src/parts/popupDesign.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupDesign() {
    let overlayDesign = document.querySelector('.popup-design'),
        buttonDesign = document.querySelectorAll('.button-design'),
        close = document.querySelector('.popup-design > .popup-dialog > .popup-content > .popup-close'),
        giftImg = document.querySelector('.fixed-gift');
    
    function modalWindow(a) {
        for (let k of a) {
            k.addEventListener('click',  () => {
                overlayDesign.style.display = 'block';  
                giftImg.style.display = 'none';
            });
    
            close.addEventListener('click', () => {
                overlayDesign.style.display = 'none';
                document.body.style.overflow = '';
                giftImg.style.display = 'block';
            });

            window.addEventListener('click', (e) => {
                if (e.target === overlayDesign) {
                    overlayDesign.style.display = 'none';
                    giftImg.style.display = 'block';
                }
            });
        }
    }
    
    modalWindow(buttonDesign);


}
    
module.exports = popupDesign;

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
        buttons = document.getElementsByTagName('button');
        var q = 0;

    window.onscroll = function() {  
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                return ++q;
            });
        }
        if (q > 0) {
            window.onscroll = null; 
        } else {
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
    slides[slideIndex - 1].classList.add('fadeInLeft');
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
    slides[slideIndex - 1].classList.add('fadeInLeft');
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
        popupGift = __webpack_require__(/*! ./parts/popupGift.js */ "./src/parts/popupGift.js"),
        popupConsultation = __webpack_require__(/*! ./parts/popupConsultation.js */ "./src/parts/popupConsultation.js"),
        popupDesign = __webpack_require__(/*! ./parts/popupDesign.js */ "./src/parts/popupDesign.js"),
        moreStyles = __webpack_require__(/*! ./parts/moreStyles.js */ "./src/parts/moreStyles.js"),
        minConsultation = __webpack_require__(/*! ./parts/minConsultation.js */ "./src/parts/minConsultation.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js");

    autoSlider();
    slider();
    popupGift();
    scrollGift();
    popupConsultation();
    popupDesign();
    moreStyles();
    minConsultation();
    calc();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map