// // Homework №2 //


// // 1
// const a = prompt('type first number: ');
// const b = prompt('type second number: ');
// const c = prompt('type third number: ');
// const result = a < b && b < c;

// alert("a < b < c ? This is: " + result);


// // 2
// let x = 1; 
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); 
// console.log(typeof res1);

// let res2 = x ? true + String(y) : false;
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = x && y ? true : false;
// console.log(res3); 
// console.log(typeof res3);

// let res4 = x + y + undefined;
// console.log(res4); 
// console.log(typeof res4);


// // 3
// const isAdult = prompt("How Old are you?");

// isAdult >= 18 ? alert("Fine, you are adult!") : alert("Sorry, you are to young!");


// // 4
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let data = [];
// let maxCount = 0;
// let maxFreq = 0;

// for (let i = 0; i <= arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j<= arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
//     if (count > maxCount) {
//         maxCount = count;
//         maxFreq = arr[i];
//     }
// }

// arr = arr.filter(element => element !== maxFreq);
// data.push(maxFreq);

// console.log(arr);
// console.log(data);


// // 5
// const a = parseFloat(prompt("Type the length of first side of triangle"));
// const b = parseFloat(prompt("Type the length of second side of triangle"));
// const c = parseFloat(prompt("Type the length of third side of triangle"));

// console.log(Math.pow(3, 2));
// if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     if (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) === c) {
//         alert('You have "right triangle"');
//     } else {
//         alert('Your have not "right triangle"');
//     }
//     const halfPerimeter = 0.5 * (a + b + c);
//     const area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

//     alert("Area of your triangle is: " + area.toFixed(3));
// } else {
//     console.log("Incorrect data. The triangle with that sides is impossible");
//     alert("Incorrect data. The triangle with that sides is impossible");
// }


// //6
// const a = parseFloat(prompt("Type the first number"));
// const b = parseFloat(prompt("Type the second number"));
// const op = parseFloat(prompt("Choose an operator:\n1. subtraction\n2. multiplication\n3. division\nother number - addition"));

// function calc(a, b, op) {
//     if (op === 1) {
//         alert(a - b);
//     } else if (op === 2) {
//         alert(a * b);
//     } else if (op === 3) {
//         alert(a / b);
//     } else {
//         alert(a + b);
//     }
// };

// calc(a, b, op);


// // 7
// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return console.log(false);
//             }
//         }
//     }
//     return console.log(true);
// }

// findUnique([1, 2, 3, 5, 3]); //false
// findUnique([1, 2, 3, 5, 11]); //true