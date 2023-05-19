// Homework №1

console.log('Rybenchuk');

let firstPlace = 'Ivan';
const secondPlace = 'Yukhym';

alert(` ${firstPlace} \n ${secondPlace}`);

firstPlace = secondPlace;

alert(` ${firstPlace} \n ${secondPlace}`);

const winer = {
    String: 'winer',
    Number: 1,
    Boolean: true,
    Undefined: undefined,
    Null: null,
}

const isAdult = confirm('Are you already 18 years old?');

console.log(isAdult);

const firstName = 'Yukhym';
const lastname = 'Rybenchuk';
const studyGroup = 'UA-1019';
const yearOfBith = 2000;
const married = false;

console.log(`${yearOfBith}, \n${married}, \n${firstName}, \n${lastname}, \n${studyGroup}`)

const haveSiblings = null;
let likesOnions;

console.log(typeof(haveSiblings));
console.log(typeof(likesOnions));

const login = prompt('Create your login');
const email = prompt('type your email');
const password = prompt('Create a password');

alert(`Dear ${login}, \n your email: ${email} \n your password: ${password} \n Please remember your login data`)

const SECOND = 1;
const SECONDS_IN_MINUTE = SECOND * 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30;

alert(`One Hour has a ${SECONDS_IN_HOUR} seconds, \n One Day has a ${SECONDS_IN_DAY} seconds, \n One Month has a ${SECONDS_IN_MONTH} seconds.`);