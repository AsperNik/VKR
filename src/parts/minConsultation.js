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