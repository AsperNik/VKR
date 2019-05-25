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