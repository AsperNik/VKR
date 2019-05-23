function autoSlider() {

    let slides = document.querySelectorAll('.main-slider-item'),
        n = 1;
        

    setInterval(showSlides(n), 1000);
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[n -1].style.display= 'block';
        n++;
    }


}

module.exports = autoSlider;