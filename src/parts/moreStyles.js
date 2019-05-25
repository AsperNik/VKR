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