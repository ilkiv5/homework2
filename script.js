/*Переменная хранит в себе значение от 0 до 9.
Написать скрипт который будет выводить слово “один”,
если переменная хранит значение 1.
 Выводить слово “два” - если переменная хранит значение 2, и т.д.
 для всех цифр от 0 до 9. Реализовать двумя способами.*/





/* FIRST METHOD
let a= 9;

if(a == 1){
   console.log("один");
}

 else if(a == 2){
   console.log("два");
}
 else if(a == 3){
   console.log("три");
}
else if(a == 4){
   console.log("четыре");
}
 else if(a == 5){
   console.log("пять");
}
else if(a == 6){
   console.log("six");
}
else if(a == 7){
   console.log("seven");
}
else if(a == 8){
   console.log("eigth");
}
else if(a == 9){
   console.log("nine");
}

else{
   console.log("not");
}
}*/



// Second method
/*
let b = 9;
let res = 0;

switch(b){

    case 6: res = 'six'
    break;
    case 7: res = 'seven'
    break;
    case 8: res = 'eight'
    break;
    case 9: res = 'nine';
    break;
    default:
}
console.log(res);*/




(2)

/*Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том,
 что число является нулевым либо положительным либо отрицательным.*/
// let a = 0;


// if (a == 0) {
//    console.log('нулевое');
// }

// else if (a < 0) {
//    console.log('отрицательное');
// }
// else if (a > 0) {
//    console.log('положительное');

// }





// Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB),
// Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать скрипт,
//  который выводит количество байт
// Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.



// function Bytes(bytes) {
//     if (bytes < 1024) return bytes + " Bytes";
//     else if (bytes < 1048576)
//         return (bytes / 1024) + " KB";

//     else if (bytes < 1073741824)
//         return (bytes / 1048576) + " MB";

//     else return (bytes / 1073741824) + " GB";
// };

// console.log(Bytes(1024));
// console.log(Bytes(1048576));
// console.log(Bytes(1073741824));
// console.log(Bytes(232));
