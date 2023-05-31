// // Homework №3 //


// // 1
// const arr = [5, 3, 4, 5, 6, 7, 3];

//bad practice:
// function compact(arr) {
//     let array;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] === arr[i]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }

// good Practice:
// function compact(arr) {
//     return Array.from(new Set(arr));
// }

// const arr2 = compact(arr);
// console.log(arr2);


// // 2
// function createArray(start, end) {
//     let arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return console.log(arr);
// }

// createArray(2, 9);


// // 3
// function printNumbers(a, b) {
//     for (let i = a; i <= b; i++) {
//         for (let j = 1; j <= i - a + 1; j++) {
//             console.log(i);
//         }
//     }
// }

// printNumbers(3, 7);

// // 4
// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i <= k; i++) {
//         let random = Math.random();
//         arr.push(Math.floor(random * (500 - 1 + 1)) + 1);
//     }
//     return console.log(arr);
// }

// randArray(5);


// // 5 
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

// function funcName(arr) {
//     let arrSec = arr.flat();
//     let newArr = [];
//     let arrNumber = [];
//     let arrString = [];
//     for (let i = 0; i < arrSec.length; i++) {
//         if (typeof arrSec[i] === 'number') {
//             arrNumber.push(arrSec[i]);
//         } else if (typeof arrSec[i] === 'string') {
//             arrString.push(arrSec[i]);
//         }
//     }
//     newArr.push(arrNumber);
//     newArr.push(arrString);
//     return newArr;
// }

// let arrNew = funcName(arr);
// console.log(arrNew);


// // 6
// let currentTime = new Date();
// let currentHour = currentTime.getHours();

// if (currentHour >= 5 && currentHour <= 11) {
//     console.log("Доброго ранку");
// } else if (currentHour > 11 && currentHour <= 17) {
//     console.log("Добрий день");
// } else if (currentHour > 17 && currentHour <= 23) {
//     console.log("Доброго вечора");
// } else {
//     console.log("Доброї ночі");
// }
