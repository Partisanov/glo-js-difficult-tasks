'use strict';

let var1 = ' АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ ';
let var2 = ' короткая строка';
let var3 = 1234546;
let var4 = true;

const getShortText = (str) => {
  if (typeof str === 'string') {
    str = str.trim();
    if (str.length > 30) {
      return str.substring(0, 30) + '...';
    } else {
      return str;
    }
  } else {
    return "Это не строка";
  }
};

console.log(getShortText(var1));
console.log(getShortText(var2));
console.log(getShortText(var3));
console.log(getShortText(var4));