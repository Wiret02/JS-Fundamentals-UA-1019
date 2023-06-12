// Homework №8 //


// // 1
// function upperCase(string) {
//     if (/^[A-Z]/.test(string)) {
//         console.log("String's starts with an uppercase character");
//     } else {
//         console.log("String's does not starts with an uppercase character");
//     }
// }

// upperCase('regexp')
// upperCase('RegExp')

// // 2
// function checkEmail(email) {
//     return /^[\w.-]+@\w+\.[a-z]{2,}$/gi.test(email);
// }
// console.log(checkEmail("Qmail2@gmail.com"));
// console.log(checkEmail("Qmail2gmailcom"));

// // 3 
// const string = "Java Script"
// const regexp = /Java/;
// const result = regexp.exec(string);
// console.log(`Script ${result}`);

// // 4
// function bankCardValidate(cardNumber) {
//     if (/^\d{4}-\d{4}-\d{4}-\d{4}$/g.test(cardNumber)) {
//         console.log("The card number is valid");
//     } else {
//         console.log("The card number is invalid");
//     }
// }

// bankCardValidate("1234-5678-9101-2131");


// // 5
// function checkEmail(email) {
//     if (/^[A-Za-z\d]+[_-{1}]?\w+@\w+.[A-Za-z]{2,}$/g.test(email)) {
//         console.log('Email is correct!');
//     } else {
//         console.log('Email is not correct!');
//     }
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

// // 6
// function checkLogin(login) {
//     console.log(/^[A-Za-z][A-Za-z\d\.]{1,9}$/.test(login));
//     return console.log(login.match(/\d+(\.\d+)?/g));
// }

// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');