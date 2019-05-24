function scrollGift() {

    let overlayGift = document.querySelector('.popup-gift'),
        giftImg = document.querySelector('.fixed-gift'),
        close = document.querySelector('.popup-gift > .popup-dialog > .popup-content > .popup-close'),
        buttons = document.getElementsByTagName('button');
        var q = 0;
        

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            q++;
            if (q > 0) {
                window.onscroll = null; 
            } else {
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
        }); 
    }  
     
   
}

module.exports = scrollGift;