function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.feedback-slider-item'),
    prev = document.querySelector('.main-prev-btn'),
    next = document.querySelector('.main-next-btn');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('fadeInLeft');
        console.log(slides[i]);
    }
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