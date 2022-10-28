'use strict';
document.addEventListener('DOMContentLoaded', function (event) {
    //блок объявления переменных 
    const DomElement = function (selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.text = '';
        this.position = 'relative';
        this.left = '10px';
        this.top = '10px';
    };
    DomElement.prototype.createElement = function () {
        let element;
        if (this.selector[0] === '.') {
            element = document.createElement('div');
            element.className = `${this.selector.slice(1)}`;
            this.text = `Это блок с классом ${this.selector}`;
        }
        if (this.selector[0] === '#') {
            element = document.createElement('p');
            element.id = this.selector.slice(1);
            this.text = `Это параграф с id ${this.selector}`;
        }
        element.style.cssText = `height : ${this.height}px;
                            width : ${this.width}px;
                            background : ${this.bg};
                            font-size: ${this.fontSize}px;
                            position: ${this.position};
                            left: ${this.left};
                            top: ${this.top};`;

        element.textContent = this.text;
        return element;
    };

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const step = 10;
        const square = document.querySelector('.square');
        const squareStyles = getComputedStyle(square);
        const top = squareStyles.top;
        const left = squareStyles.left;

        switch (key) {
            case 'ArrowUp':
                square.style.top = `${parseInt(top, 10) - step}px`;
                break;
            case 'ArrowDown':
                square.style.top = `${parseInt(top, 10) + step}px`;
                break;
            case 'ArrowLeft':
                square.style.left = `${parseInt(left, 10) - step}px`;
                break;
            case 'ArrowRight':
                square.style.left = `${parseInt(left, 10) + step}px`;
                break;
        }
    });

    //блок описания функций 


    //блок функционала
    const square = new DomElement('.square', 100, 100, '#354D73');
    square.position = 'absolute';
    document.body.append(square.createElement());


    // блок вывода в консоль
});