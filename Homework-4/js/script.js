// // Homework №4 //


// // 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function sumSliceArray(arr, first, second) {
//     try {
//         if (typeof first !== 'number' || typeof second !== 'number') {
//             throw new TypeError('you put a data with wrong type, try again using only numbers for argument "first", "second"');
//         } else if (first > arr.length || second > arr.length) {
//             throw new RangeError('there is not any element in array with that index');
//         } else {
//             return console.log(arr[first] + arr[second]);
//         }
//     } catch (error) {
//         console.log(error.stack);
//     }
// }

// sumSliceArray(arr, 3, 5);


// // 2
// function checkAge() {
//     const name = prompt('Please type your name:');
//     const age = parseInt(prompt('How old are you?'));
//     const status = prompt('Type your status ("admin", "moderator", "user"):');

//     if (name.length === 0 || status.length === 0) {
//         throw new Error('Acсess denied! \nThe field is empty! Please try again');
//     } else if (isNaN(age)) {
//         throw new EvalError('Acсess denied! \nWrong password! Please use numbers to type your age!');
//     } else if (age < 18 || age > 70) {
//         throw new RangeError('Acсess denied! \nYour age is out of our rules');
//     } else if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
//         throw new EvalError('Acсess denied! \n Wrong status! Please check and try again');
//     } else {
//         console.log('Success! \nChoose film to watch!');
//     }
// }

// try {
//     checkAge();
// } catch (error) {
//     console.log(error.stack);
// }


// // 3
// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new TypeError('Wrong data type, please use numbers!');
//     } else {
//         return console.log('Rectangle Area is: ' + width * height);
//     }
// }

// try {
//     calcRectangleArea(7, 3);
// } catch (exception) {
//     console.log(exception.message);
// }


// // 4
// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MonthException";
//         this.message = message;
//     }
// }

// function showMonthName(month) {
//     try {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//         if (typeof month !== 'number' || month > 12 || month < 1) {
//             throw new MonthException("Incorrect month number.");
//         } else {
//             console.log(months[month - 1]);
//         }
//     } catch (exception) {
//         console.log(exception.stack);
//     }

// }

// showMonthName(5);
// showMonthName(14);


// // 5
// function showUser(id) {
//     if (id < 0) {
//         throw new Error("ID must not be negative: " + id);
//     }

//     const idObj = {};
//     idObj.id = id;
//     return idObj;
// }

// function showUsers(ids) {
//     const idsArr = [];
//     for (let i = 0; i < ids.length; i++) {
//         try {
//             let id = showUser(ids[i]);
//             idsArr.push(id);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     return idsArr;
// }

// console.log(showUsers([7, -12, 44, 22]));