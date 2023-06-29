// Homework №13 //


// // 1
// const voteBtn = document.querySelector(".btn");

// async function vote() {
//     let response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Kyiv");
//     let data = await response.json();
//     let currentDateTime = data.datetime;
//     voteBtn.textContent = `Your vote is accepted: ${currentDateTime}`;
// }

// voteBtn.addEventListener("click", vote);


// // 2 
// const booksBtn = document.querySelector(".btn");

// async function fetchData() {
//     const response = await fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors");
//     const data = await response.json();

//     function getAuthors() {
//         const authorsName = data.map((author) => author.name);
//         const authorsSurname = data.map((author) => author.surname);

//         const autorsList = document.querySelector(".authors");
//         autorsList.innerHTML = '';

//         const fullNames = authorsName.map((name, index) => {
//             const fullName = `${name} ${authorsSurname[index]}`;
//             autorsList.insertAdjacentHTML('beforeend', `<li>${fullName}</li>`);
//             return fullName;
//         });

//         return fullNames;
//     }

//     getAuthors();
// }

// booksBtn.addEventListener('click', fetchData);


// // 3
// const avatar = document.querySelector(".avatar");
// const userName = document.querySelector(".name");
// const age = document.querySelector(".age");
// const gender = document.querySelector(".gender");
// const country = document.querySelector(".country");
// const login = document.querySelector(".login");
// const password = document.querySelector(".password");
// const email = document.querySelector(".email");

// async function changeUser() {
//     let response = await fetch("https://randomuser.me/api/");
//     let data = await response.json();
//     let info = data.results[0];

//     let img = document.createElement("img");
//     img.src = info.picture.large;
//     avatar.innerHTML = "";
//     avatar.appendChild(img);

//     let fullName = `${info.name.title} ${info.name.first} ${info.name.last}`;

//     userName.innerHTML = `Full name: ${fullName}`;
//     age.innerHTML = `Age: ${info.dob.age}`;
//     gender.innerHTML = `Gender: ${info.gender}`;
//     country.innerHTML = `Country: ${info.location.country}`;
//     login.innerHTML = `Login: ${info.login.salt}`;
//     password.innerHTML = `Password: ${info.login.password}`;
//     email.innerHTML = `Email: ${info.email}`;
// }
// changeUser();

