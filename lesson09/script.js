'use strict';
//блок объявления переменных 
const firstFormat = document.getElementById('first');
const secondFormat = document.getElementById('second');

//блок описания функций 
const declOfNum = (number, words) => {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 :
        [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
};
const formatNumber = (num) => {
    return (num < 10) ? '0' + num : num;
};
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const updateClock = () => {
    const date = new Date();
    const dayName = date.toLocaleString('ru', { weekday: 'long' });
    const day = date.getHours();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    firstFormat.textContent = `Сегодня ${capitalizeFirstLetter(dayName)}, ${day} ${monthList[month]} ${year} года,
     ${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} 
     ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}
     ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`;
    secondFormat.textContent = `${formatNumber(day)}.${formatNumber(month)}.${year} -
     ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};

//блок функционала


setInterval(updateClock, 500);
// блок вывода в консоль
