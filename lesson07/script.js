'use strict';
//блок объявления переменных 

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//блок описания функций 

const isToday = (dayName) => {
    const todayDay = ((6 + new Date().getDay()) % 7);
    const today = week[todayDay];
    return (dayName === today) ? true : false;
};
const isWeekend = (dayName) => {
    return (dayName === "Суббота" || dayName === "Воскресенье") ? true : false;
};

const day = (array) => {
    const daysWrapper = document.getElementById('days-wrapper');
    const list = document.createElement('ul');
    list.style.listStyle = "none";

    daysWrapper.appendChild(list);
    array.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        if (isWeekend(item)) {
            li.style.fontStyle = "italic";
        }
        if (isToday(item)) {
            li.style.fontWeight = "bold";
        }
        list.appendChild(li);

    });
};

//блок функционала
day(week);
// блок вывода в консоль
