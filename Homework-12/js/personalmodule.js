const os = require('os');
const name = os.userInfo().username;

const currentDate = new Date();
let currentHour = currentDate.getHours();

function Greeting() {

    if (currentHour < 5) {
        return `Good night, ${name}`;
    } else if (currentHour < 11) {
        return `Good morning, ${name}`;
    } else if (currentHour < 17) {
        return `Have a nice day, ${name}`;
    } else {
        return `Good evening, ${name}`;
    }
}

module.exports = {
    Greeting,
    currentDate,
};