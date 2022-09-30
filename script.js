// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа

const getMultiplicationNumbers = (number) => {
  const numArray = String(number).split("");
  let result = 1;
  for (let i = 0; i < numArray.length; i++) {
    result *= Number(numArray[i]);
  }
  return result;
};

console.log(getMultiplicationNumbers(num));

//version 2:

const getMultiplicationNum = (number) => {
  let result = 1;
  while (number > 0) {
    result *= number % 10;
    number = Math.floor(number / 10);
  }
  return result;
};

console.log(getMultiplicationNum(num));

// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их.
//  Правильно использовать цикл или методы перебора.

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let powNum = getMultiplicationNum(num) ** 3;
console.log(powNum);

// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(String(powNum).slice(0, 2));
