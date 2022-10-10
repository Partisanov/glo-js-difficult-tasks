'use strict';
//блок объявления переменных 
const colorsFirst = {
    first: 'red',
    second: 'blue',
    third: 'green'
};

const colorsSecond = {
    first: 'orange',
    second: 'yellow',
    third: 'violet'
};

const files = [
    {
        id: 0,
        items: [
            {
                text: 'Lorem ipsum',
                element: 'p'
            },
            {
                text: 'Lorem ipsum',
                element: 'span'
            },
            {
                text: 'Lorem ipsum',
                element: 'div'
            },
            {
                text: 'Lorem ipsum',
                element: 'strong'
            },
            {
                text: 'Lorem ipsum',
                element: 'p'
            },
            {
                text: 'Lorem ipsum',
                element: 'b'
            },
            {
                text: 'Lorem ipsum',
                element: 'div'
            },
            {
                text: 'Lorem ipsum',
                element: 'strong'
            }
        ]
    },
    {
        id: 1,
        items: [
            {
                text: 'Lorem ipsum',
                element: 'span'
            },
            {
                text: 'Lorem ipsum',
                element: 'b'
            },
            {
                text: 'Lorem ipsum',
                element: 'div'
            },
            {
                text: 'Lorem ipsum',
                element: 'strong'
            },
            {
                text: 'Lorem ipsum',
                element: 'span'
            },
            {
                text: 'Lorem ipsum',
                element: 'b'
            },
            {
                text: 'Lorem ipsum',
                element: 'span'
            },
            {
                text: 'Lorem ipsum',
                element: 'strong'
            }
        ]
    }
];
//блок описания функций 



//блок функционала
const wrapper = document.getElementById('content-wrapper');

files.forEach((el) => {
    let colorList;
    colorList = (el.id % 2 === 0) ? colorsFirst : colorsSecond;

    el.items.forEach((item) => {
        const element = document.createElement(`${item.element}`);
        element.innerHTML = item.text;
        switch (true) {
            case (item.element === 'span' || item.element === 'p'):
                element.style.color = colorList.first;
                break;
            case (item.element === 'div'):
                element.style.color = colorList.second;
                break;
            case (item.element === 'b' || item.element === 'strong'):
                element.style.color = colorList.third;
                break;
        }
        wrapper.appendChild(element);
    });
}
);




// блок вывода в консоль
