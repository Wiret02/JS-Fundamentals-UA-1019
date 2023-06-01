// // Homework №4 //


// // 1
// class Circle {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }

//     calcThisCircleLength() {
//         return (2 * Math.PI * this.radius).toFixed(2);
//     }

//     calcCircleLength(radius) {
//         return 2 * Math.PI * radius;
//     }

//     copy() {
//         return new Circle(this.x, this.y, this.radius);
//     }

//     newCircle(x, y, radius) {
//         return new Circle(x, y, radius);
//     }

//     isPoinInsideCircle(x, y) {
//         if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.radius) {
//             return `the point (${x}, ${y}) is inside of this circle.`;
//         } else {
//             return `the point (${x}, ${y}) is outside of this circle.`;
//         }
//     }

//     toString() {
//         return `Circle: center(${this.x}, ${this.y}), radius ${this.radius}.`;
//     }
// }

// const circle = new Circle(12, 4, 10);
// console.log(circle.calcThisCircleLength());

// const secondCircle = circle.copy();
// console.log(secondCircle.calcThisCircleLength());

// const thirdCircle = circle.newCircle(32, 14, 15);
// console.log(thirdCircle.calcThisCircleLength());
// console.log(thirdCircle.isPoinInsideCircle(32, 21));
// console.log(thirdCircle.toString());

// // 2
// function propsCount(currentObject) {
//     return console.log(Object.keys(currentObject).length);
// }

// let mentor = {
//     course: "JS fundamentals",
//     duration: 3,
//     direction: "web-development",
// };

// propsCount(mentor);

// // 3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         const fullName = this.surname + " " + this.name;
//         return fullName;
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName(middleName) {
//         let fullName = super.showFullName();
//         fullName += " " + middleName;
//         return fullName;
//     }

//     showCourse() {
//         const currentDate = new Date();
//         const currentYear = currentDate.getFullYear();

//         if (currentYear >= this.year) {
//             let currentCourse = currentYear - this.year;
//             if (currentCourse >= 1 && currentCourse <= 6) {
//                 return `Current course: ${currentCourse}`;
//             } else if (currentCourse === 0) {
//                 return `Current course: ${currentCourse + 1}`;
//             } else if (currentCourse > 6) {
//                 const graduationYear = this.year + 6;
//                 throw new RangeError(`This student already graduated in ${graduationYear}!`);
//             }
//         } else {
//             throw new EvalError(`Wrong data! Now is ${currentYear} year. how can you already enter the uuniversity in ${this.year}?`);
//         }
//     }
// }

// const student1 = new Student("Petro", "Petrenko", 2019);

// console.log(student1.showFullName("Petrovych"));
// console.log(student1.showCourse());


// // 4
// class SimpleMarker {
//     constructor(color, capacity) {
//         this.color = color;
//         this.capacity = capacity;
//     }

//     print(text) {
//         let printedText = '';

//         for (let i = 0; i < text.length; i++) {
//             if (this.capacity > 0) {
//                 printedText += text[i];
//                 if (text[i] !== ' ') {
//                     this.capacity -= 0.5;
//                 }
//             }
//         }
//         console.log('%c' + printedText, 'color:' + this.color + ';');
//         console.log(`Color capacity of your marker is ${this.capacity}%.`);
//     }
// }

// class RefillingMarker extends SimpleMarker {
//     constructor(color, capacity) {
//         super(color, capacity);
//     }

//     refill(color, capacity) {
//         if (capacity > 0 && capacity <= 100) {
//             this.color = color;
//             this.capacity = capacity;
//             console.log(`refilling with ${this.color} color... capacity is:  ${this.capacity}%`);
//         } else {
//             throw new EvalError(`You can't add ${capacity}% of capacity, maximum is 100%`);
//         }
//     }
// }

// let marker1 = new RefillingMarker('green', 100);

// marker1.print('Дуже цікаве це завдання з маркером. Незнаю наскільки хороша практика користуватися різними символами, як от "%с", щоб стилізувати якийсь текст чи елемент, як я це реалізував щоб мій маркер й справді писав текст кольором у консолі. Але мені ');

// marker1.refill('yellow', 100);
// marker1.print('Закінчився колір. Зелене чорнило вже скінчилось, тому прийшлося дозаправити маркер жовтим :) Так от мені дуже сподобалось реалізовувати це маркер, продумувати до нього логіку, дебажити, перевіряти чи все працює та інші дрібнички.');


// // 5
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    #experience = 1.2;

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        if (value < 1) {
            value = 1;
        }
        this.#experience = value;
    }

    showSalaryWithexperience() {
        return this.showSalary() * this.#experience;
    }
}

const worker1 = new Worker("John Jonson", 20, 23);

console.log(worker1.fullName);
console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithexperience()}`);
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithexperience()}`);

const worker2 = new Worker("Tom Tomson", 48, 22)

console.log('\n' + worker2.fullName);
console.log(`${worker2.fullName} salary: ${worker2.showSalary()}`);
worker2.experience = 1.5;
console.log(`New experience: ${worker2.experience}`);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithexperience()}`);

const worker3 = new Worker("Andy Ander", 29, 23)

console.log('\n' + worker3.fullName);
console.log(`${worker3.fullName} salary: ${worker3.showSalary()}`);
worker3.experience = 1.5;
console.log(`New experience: ${worker3.experience}`);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithexperience()}`);

const workers = [];

workers.push(worker1);
workers.push(worker2);
workers.push(worker3);

workers.sort((a, b) => a.showSalaryWithexperience() - b.showSalaryWithexperience())

console.log('\n' + "Sorted salary:");

for (const worker of workers) {
    console.log(`${worker.fullName} salary: ${worker.showSalaryWithexperience()}`);
}