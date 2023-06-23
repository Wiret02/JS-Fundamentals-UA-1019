// Homework №11 //


// // 1
// function getPromise(message, delay) {
//     if (typeof (delay) === "number" && delay > 0) {
//         return new Promise(resolve => {
//             setTimeout(() => resolve(message), delay)
//         });
//     }
// }

// getPromise("test promise", 2000).then( (data) => {
//     console.log(data);
// });


// // 2
// function calcArrProduct(arr) {
//     return new Promise((resolve,) => {
//         let AllNumbers = true;

//         if (!arr.every(currentValue => typeof (currentValue) === "number")) {
//             AllNumbers = false;
//         }

//         if (AllNumbers === true) {
//             resolve(arr.reduce((a, b) => a * b));
//         } else {
//             resolve("Error! Incorrect array!");
//         }
//     })

// }

// calcArrProduct([3, 4, 5]).then(result => console.log(result));
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));


// // 3
// new Promise(function (resolve, reject) {
//     function askNumber() {
//         let number = prompt("Type any number please!");

//         if (parseFloat(number)) {
//             resolve(number);
//         } else {
//             reject("Invalid number input");
//         }
//     }

//     askNumber();
// }).catch(function (error) {
//     return new Promise(function (resolve, reject) {
//         function askNumberRecursively() {
//             let number = prompt("Type any number please!");

//             if (parseFloat(number)) {
//                 resolve(number);
//             } else {
//                 reject(askNumberRecursively());
//             }
//         }

//         askNumberRecursively()

//     });
// }).then(function (result) {
//     console.log(result);
// });


// // 4

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbersPromise() {
//     let promise = Promise.resolve();

//     for (let i = 0; i <= 10; i++) {
//         promise = promise.then(() => {
//             return delay(i, Math.random() * 3000)
//         }).then((result) => {
//             console.log(result);
//         })
//     }
// }
// showNumbersPromise();

// async function showNumbersAsync() {
//     for (let i = 0; i <= 10; i++) {
//         const result = await delay(i, math.random() * 3000);
//         console.log(result);
//     }
// }
// showNumbersAsync();

