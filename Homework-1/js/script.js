// Homework №1 //

// console.log('Rybenchuk');

// let firstPlace = 'Ivan';
// const secondPlace = 'Yukhym';

// alert(` ${firstPlace} \n ${secondPlace}`);

// firstPlace = secondPlace;

// alert(` ${firstPlace} \n ${secondPlace}`);

// const winer = {
//     String: 'winer',
//     Number: 1,
//     Boolean: true,
//     Undefined: undefined,
//     Null: null,
// }

// const isAdult = confirm('Are you already 18 years old?');

// console.log(isAdult);

// const firstName = 'Yukhym';
// const lastname = 'Rybenchuk';
// const studyGroup = 'UA-1019';
// const yearOfBith = 2000;
// const married = false;

// console.log(`${yearOfBith}, \n${married}, \n${firstName}, \n${lastname}, \n${studyGroup}`)

// const haveSiblings = null;
// let likesOnions;

// console.log(typeof(haveSiblings));
// console.log(typeof(likesOnions));

// const login = prompt('Create your login');
// const email = prompt('type your email');
// const password = prompt('Create a password');

// alert(`Dear ${login}, \n your email: ${email} \n your password: ${password} \n Please remember your login data`)

// const SECOND = 1;
// const SECONDS_IN_MINUTE = SECOND * 60;
// const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
// const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
// const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30;

// alert(`One Hour has a ${SECONDS_IN_HOUR} seconds, \n One Day has a ${SECONDS_IN_DAY} seconds, \n One Month has a ${SECONDS_IN_MONTH} seconds.`);

// Homework №2 //

// const a = prompt('type first number: ');
// const b = prompt('type second number: ');
// const c = prompt('type third number: ');
// const result = a < b && b < c;

// alert("a < b < c ? This is: " + result);

// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); 
// console.log(typeof res1);

// let res2 = x ? true + String(y) : false ;
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = x && y ? true : false;
// console.log(res3); 
// console.log(typeof res3);

// let res4 = x + y + undefined;
// console.log(res4); 
// console.log(typeof res4);

const isAdult = prompt("How Old are you?")

isAdult >= 18 ? alert("Fine, you are adult!") : alert("Sorry, you are to young!");