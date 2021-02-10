
// Переменная содержит в себе строку. 
// Вывести строку в обратном порядке.


// let str = "reverse string";
// let strRev = "";
// for (i = str.length - 1; i >= 0; i--) {
//    strRev += str[i];
// }
// console.log(strRev);

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

// function divider(inputNum, n) {
//    let outputNum = [];
//    for (let i = 1; i <= inputNum && outputNum.length <= n - 1; i++) {
//       if (!(inputNum % i)) {
//          outputNum.push(i);
//       }
//    }
//    return outputNum;
// }
// console.log(divider(20, 4));



// Найти сумму цифр числа которые кратны двум

// function getSum(y) {
//    let x = String(y);
//    let sum = 0;
//    for (let i = 0; i < x.length; i++) {
//       sum += Number(x[i]);
//    }
//    return (sum)
// }

// console.log(getSum(123456789));



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