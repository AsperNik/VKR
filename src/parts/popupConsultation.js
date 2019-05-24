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