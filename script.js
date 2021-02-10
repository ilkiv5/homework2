
// Переменная содержит в себе строку. 
// Вывести строку в обратном порядке.


// let str = 'string';
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }


// Переменная содержит в себе число.
// Написать скрипт который посчитает факториал этого числа.

// function getFactorial(n) {
//    if (n === 1) {
//       return 1;
//    }
//    else {

//       return n * getFactorial(n - 1);
//    }
// }
// var result = getFactorial(7);
// console.log(result); 



// Дано число - вывести первые N делителей этого числа нацело.

// for (let i = 0; i <= 16; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// Найти сумму цифр числа которые кратны двум
// let sum = 0;
// for (let i = 0; i <= 20; i++) {

//    if (i % 2 == 0) {
//       sum += i;

//    }
// }
// console.log(sum);

// Найти минимальное число которое больше 300 и нацело делиться на 17

// function minNum(a, b) {
//     if (a % b == 0) return a;
//     else return (minNum(a + 1, b));
// }
// console.log(minNum(300, 17));



// Заданы две переменные для двух целых чисел,
//  найти максимальное общее значение которое нацело делит 
// два заданных числа.


// function maxNum(a, b) {
//     if (!b) {
//         return a;
//     }
//     return maxNum(b, a % b);
// };


// console.log(maxNum(12, 324))