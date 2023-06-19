// Homework №10 //


// // 1
// const names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };

// const { first: f, third: x, fifth = "John" } = names;

// console.log(f);
// console.log(x);
// console.log(fifth);


// // 2
// const data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// const { names: [, name2, , name4], ages: [, age2, , age4] } = data;

// console.log(name2);
// console.log(age2);
// console.log(name4);
// console.log(age4);


// 3
// function mul(...rest) {
//     let counter = 1;
//     for (const argument of rest) {
//         if (typeof (argument) === "number") {
//             counter *= argument;
//         }
//     }
//     return counter > 1 ? counter : 0;
// }
// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));


// // 4 
// const server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => {
//             return this.data + "";
//         });
//     }
// };
// const client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function () {
//         return (callback => {
//             this.result = callback();
//         });
//     }
// };
// client.calc(123);
// console.log(client.result);
// console.log(typeof client.result);


// // 5
// const keys = [1, 2, 3, 4];
// const values = ["div", "span", "b", "i"];

// mapBuilder = (keys, values) => {
//     const newMap = new Map();

//     for (let i = 0; i < keys.length; i++) {
//         newMap.set(keys[i], values[i]);
//     }

//     return newMap;
// }

// const map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2));


// // 6
// const arr = [];

// for (let i = 0; i <= 2; i++) {
//     arr[i] = function () {
//         innerFunction = () => console.log(i);
//         return innerFunction();
//     };
// }

// arr[0]();
// arr[arr.length - 1]();