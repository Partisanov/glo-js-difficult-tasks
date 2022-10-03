'use strict';

// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = prompt('Выберите язык - введите ru или en');

// Написать условия при котором в зависимости от значения lang будут выводится 
//дни недели на русском или английском языке.
//Решите задачу:

//  a) через if,
if(lang =='ru'){
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else{
  console.log('Monday, Tuesday, Wednesday, Thursdey, Friday, Saturday, Sunday');
}

//  b) через switch-case

switch(lang){
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursdey, Friday, Saturday, Sunday');
    break;
}

//  c) через многомерный массив без ифов и switch.
let langArray = [];
langArray.ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
langArray.en = 'Monday, Tuesday, Wednesday, Thursdey, Friday, Saturday, Sunday';
console.log(langArray[lang]);

// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = prompt("Введите имя:");
let result = namePerson === "Артем" ? console.log("директор") :
 (namePerson === "Александр") ? console.log("преподаватель") : 
 console.log("студент");

