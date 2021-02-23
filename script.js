
// Задан двумерный массив - объединить каждый внутренний массив с 
//верхнем массивом - только по уникальным значениям.

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var arr = [1, 2, 4, [8, 4, 12], [13, 29, 11], [0, 5, 3, 11], 5, 6, 7, [3, 8, 21], 3];
var arrUnique = arr.flat(2);
var unique = arrUnique.filter(onlyUnique);
console.log(unique);

//------------------------------------------------------------
// Написать функцию которая возвращает true/false
//  в зависимости от того - все ли уникальные значения в массиве или есть не уникальные

// function findUnique(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j])
//                 return false;
//         }
//     }
//     return true;
// }

// console.log(findUnique(["a", "1", "1", "25", "ew", "qwe", "5"]));

//------------------------------------------------------------


// Задан массив объектов студентов вида
// [{ name: “Ivan”, estimate: 4, course: 1, active: true },
// { name: “Ivan”, estimate: 3, course: 1, active: true },
// { name: “Ivan”, estimate: 2, course: 4, active: false },
//     { name: “Ivan”, estimate: 5, course: 2, active: true }] -
//     заполнить его более большим количеством студентов.
// Написать функцию которая возвращает: среднюю оценку
// студентов в разрезе каждого курса: { 1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5 }
// с учетом только тех студентов которые активны.
// Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.
let students = [
    { name: "Ivan", estimate: 3, course: 1, active: true },
    { name: "Petya", estimate: 4, course: 1, active: false },
    { name: "Anton", estimate: 3, course: 4, active: false },
    { name: "Andrew", estimate: 2, course: 2, active: true },
    { name: "Vasya", estimate: 3, course: 3, active: true },
    { name: "Roman", estimate: 3, course: 2, active: false },
    { name: "Vladimir", estimate: 5, course: 4, active: true },
    { name: "Oleg", estimate: 5, course: 3, active: true },
];


const courses = {};
const results = {};

function getAvgEstimate() {
    for (let student of students) {
        if (!student.active) {
            continue;
        }
        const course = courses[student.course];
        if (!course) {
            courses[student.course] = { studentsActive: 1, estimate: student.estimate };
        } else {
            course.studentsActive = course.studentsActive + 1;
            course.estimate = course.estimate + student.estimate;
        }
    }
    for (let course in courses) {
        results[course] = courses[course].estimate / courses[course].studentsActive;
    }
    return results;

}

console.log(getAvgEstimate());

