'use strict';

//блок объявления переменных 
let arr = ['123', '234', '345', '456', '8606', '43', '5532'];

//блок описания функций 
const getPrimeNumbers = (n) => {
  for (let number = 2; number <= n; number++) {
    for (let divider = 2; divider <= number; divider++) {
      if (number % divider === 0 && divider < number) {
        break;
      } else if (divider === number) {
        console.log(number + ' Делители этого числа: 1 и ' + number);
      }
    }
  }
};

//блок функционала

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

getPrimeNumbers(100);

// блок вывода в консоль