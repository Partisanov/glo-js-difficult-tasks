'use strict';
//блок объявления переменных 

//блок описания функций 
const decorateText = () => {
    let colorList = ["#009900", "#0099990", "#003399", "#663399", "#CC3399"];
    const pWrapper = document.getElementById('paragraphs-wrapper');
    const paragraphs = pWrapper.getElementsByTagName('p');
    let colorNumber = 0;

    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs.item(i);
        paragraph.style.color = (colorList[colorNumber]).replace('"', '');
        colorNumber = (colorNumber === (colorList.length - 1)) ? 0 : ++colorNumber;
    }
};

//блок функционала
decorateText();

// блок вывода в консоль
