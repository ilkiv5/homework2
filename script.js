/*Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”,
если переменная хранит значение 1.
 Выводить слово “два” - если переменная хранит значение 2, и т.д.
 для всех цифр от 0 до 9. Реализовать двумя способами.*/

//FIRST METHOD
// function f(a) {
//     if (a == 1) {
//         return 'one';
//     } else if (a == 2) {
//         return 'two';
//     } else if (a == 3) {
//         return 'three';
//     } else if (a == 4) {
//         return 'four';
//     } else if (a == 5) {
//         return 'five';
//     } else if (a == 6) {
//         return 'six';
//     } else if (a == 7) {
//         return 'seven';
//     } else if (a == 8) {
//         return 'eigth';
//     } else if (a == 9) {
//         return 'nine';
//     } else {
//         return 'invalid number';
//     }
// }
// console.log(f());

//SECOND METHOD WITH SWITCH

// function f(a) {
//     switch (a) {
//         case 6: return res = 'six';
//         case 7: return res = 'seven';
//         case 8: return res = 'eigth';
//         case 9: return res = 'nine';
//         default:
//     } if (a < 6 || a > 9) {
//         return 'invalid number';
//     }
// }
// console.log(f(10));

//------------------------------------------------------------

//Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том,
//что число является нулевым либо положительным либо отрицательным.*

// function num(b) {
//     if (b == 0) {
//         return 'нулевое';
//     } else if (b < 0) {
//         return 'отрицательное';
//     } else if (a > 0) {
//         return 'положительное';

//     }
// }
// console.log(num(0));

//------------------------------------------------------------
// Переменная хранит в себе единицу измерения одно из возможных значений(Byte, KB, MB, GB),
//    Вторая переменная хранит в себе целое число.В зависимости от того какая единица измерения написать скрипт,
//       который выводит количество байт
// Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.

// function f(value, num) {

//     if (value == 'Byte') {
//         return num * 1;
//     }
//     else if (value == 'KB') {
//         return num * 1024;
//     } else if (value == 'MB') {
//         return num * 1024 * 1024;
//     } else if (value == 'GB') {
//         return num * 1024 * 1024 * 1024;
//     }

// }
// console.log(f('MB', 20));


//------------------------------------------------------------


// Переменная содержит в себе строку. 
// Вывести строку в обратном порядке.


// function reverse(str) {
//     var newStr = "", i;
//     for (i = str.length - 1; i >= 0; i--) {
//         newStr += str.charAt(i);
//     }
//     return newStr;
// }
// console.log(reverse("reverse string"));

//------------------------------------------------------------
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

//------------------------------------------------------------

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


//------------------------------------------------------------

// Найти сумму цифр числа которые кратны двум

// function f(a) {
//     let res = 0;
//     while (a > 0) {
//         let r = a % 10;
//         if (r % 2 === 0) {
//             res += r;
//         }
//         a = parseInt((a / 10));
//     }
//     return res;
// }
// let res = f(123456787654);
// console.log(res);

//------------------------------------------------------------

// Найти минимальное число которое больше 300 и нацело делиться на 17

// function minNum(a, b) {
//     if (a % b == 0) return a;
//     else return (minNum(a + 1, b));
// }
// console.log(minNum(300, 17));


//------------------------------------------------------------

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

//------------------------------------------------------------
// Написать функцию, которая транспонирует матрицу
// function transpose(matrix) {
//     const rows = matrix.length, cols = matrix[0].length;
//     const grid = [];
//     for (let j = 0; j < cols; j++) {
//         grid[j] = Array(rows);
//     }
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             grid[j][i] = matrix[i][j];
//         }
//     }
//     return grid;
// }

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

//------------------------------------------------------------

//Написать функцию, которая умножает две матрицы

// function MultiplyMatrix(a, b) {
//     let rowsa = a.length;
//     let colsa = a[0].length;
//     let rowsb = b.length;
//     let colsb = b[0].length;
//     c = [];
//     if (colsa != rowsb) return false;
//     for (let i = 0; i < rowsa; i++) c[i] = [];
//     for (let j = 0; j < colsb; j++) {
//         for (let i = 0; i < rowsa; i++) {
//             let t = 0;
//             for (let k = 0; k < rowsb; k++) t += a[i][k] * b[k][j];
//             c[i][j] = t;
//         }
//     }
//     return c;
// }
// console.log(MultiplyMatrix([[1, 2], [3, 4]], [[5, 6], [7, 8]]));

//------------------------------------------------------------

//Найти номер столбца двумерного массива сумма которого является максимальной 
// let mas = [
//     [1, 42, 3],
//     [41, 5, 8],
//     [5, 66, 78],
//     [5, 26, 18]
// ];
// let res = {
//     targetIndex: 0,
//     sum: 0
// };

// for (let i = 0; i < mas[0].length; i++) {
//    let currentSum = mas.reduce((prev, current) => prev + current[i], 0);
//     if (res.sum <= currentSum) {
//         res.sum = currentSum;
//         res.targetIndex = i + 1;
//     }
// }
// console.log(res);


//------------------------------------------------------------

// Удалить из массива все столбцы которые не имеют ни 
// одного нулевого элемента и сумма которых положительна - оформить в виде функции

// let mas = [
//     [0, -4, 5, 9],
//     [6, -6, 1, 0],
//     [2, 3, -4, 4]
// ];
// function cut(arr) {
//     let columns = new Array(arr[0].length).fill(1);
//     let res = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         let sum = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (!arr[j][i]) {
//                 columns[i] = 0;
//                 break;
//             }
//             sum += arr[j][i];
//         }
//         if (sum <= 0) {
//             columns[i] = 0;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         res.push([]);
//         for (let j = 0; j < columns.length; j++) {
//             if (columns[j]) {
//                 res[i].push(arr[i][j]);
//             }
//         }
//     }
//     return res;
// }
// console.log(cut(mas));

