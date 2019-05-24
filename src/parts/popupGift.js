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