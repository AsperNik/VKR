function calc() {
    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        price = document.querySelector('.calc-price'),  
        promocode = document.querySelector('.promocode'),
        total = 0;

    size.addEventListener('change', function() {
        let  sizePrice = +size.options[size.selectedIndex].value,
            koef = +material.options[material.selectedIndex].value,
            optPrice = +options.options[options.selectedIndex].value;

        if (size.options[size.selectedIndex].value != "0" && material.options[material.selectedIndex].value != "0") {
            total = sizePrice * koef + optPrice;
            if (promocode.value == "IWANTPOPART") {
                price.innerHTML = total / 30;
            } else {
                price.innerHTML = total;    
            }
        } else {
             price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    });

    material.addEventListener('change', () => {
        let  sizePrice = +size.options[size.selectedIndex].value,
            koef = +material.options[material.selectedIndex].value,
            optPrice = +options.options[options.selectedIndex].value;

        if (size.options[size.selectedIndex].value != "0" && material.options[material.selectedIndex].value != "0") {
            total = sizePrice * koef + optPrice;
            if (promocode.value == "IWANTPOPART") {
                price.innerHTML = total / 100 * 70;
            } else {
                price.innerHTML = total;    
            }
        } else {
            price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    });
    options.addEventListener('change', () => {
        let  sizePrice = +size.options[size.selectedIndex].value,
            koef = +material.options[material.selectedIndex].value,
            optPrice = +options.options[options.selectedIndex].value;

        if (size.options[size.selectedIndex].value != "0" && material.options[material.selectedIndex].value != "0") {
            total = sizePrice * koef + optPrice;
            if (promocode.value == "IWANTPOPART") {
                price.innerHTML = total / 100 * 70;
            } else {
                price.innerHTML = total;    
            }
        } else {
            price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    });
    promocode.addEventListener('input', () => {
        if (size.options[size.selectedIndex].value != "0" && material.options[material.selectedIndex].value != "0") {
            total = sizePrice * koef + optPrice;
            if (promocode.value == "IWANTPOPART") {
                price.innerHTML = total / 100 * 70;
            } else {
                price.innerHTML = total;    
            }
        } else {
            price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    });
}

module.exports = calc;