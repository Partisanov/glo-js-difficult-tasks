'use strict';

// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = prompt('Выберите язык - введите ru или en');
const langArray = [["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
["Monday", "Tuesday", "Wednesday", "Thursdey", "Friday", "Saturday", "Sunday"]];

// Написать условия при котором в зависимости от значения lang будут выводится 
//дни недели на русском или английском языке.
//Решите задачу:

const getArrayElements = (array) => {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i] + ', ';
  }
  return result.slice(0, -2);
};

//  a) через if,
if (lang == 'ru') {
  console.log(getArrayElements(langArray[0]));
} else {
  console.log(getArrayElements(langArray[1]));
}

//  b) через switch-case

switch (lang) {
  case 'ru':
    console.log(getArrayElements(langArray[0]));
    break;
  case 'en':
    console.log(getArrayElements(langArray[1]));
    break;
}

//  c) через многомерный массив без ифов и switch.

console.log(lang === 'ru' ? getArrayElements(langArray[0]) : console.log(getArrayElements(langArray[1])));

// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = prompt("Введите имя:");
let result = namePerson === "Артем" ? console.log("директор") :
  (namePerson === "Александр") ? console.log("преподаватель") :
    console.log("студент");

