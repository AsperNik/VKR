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