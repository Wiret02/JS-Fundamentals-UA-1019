// Homework №1 //


// // 1
// const newWindow = window.open('', '', 'width=300, height=300');

// setTimeout(function () {
//     newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function () {
//     newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(function () {
//     newWindow.close();
// }, 6000);

// // upgradet versions with promises and async/await

// function resizeToPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("resizeTo");
//         newWindow.resizeTo(500, 500);
//         resolve();
//       }, Math.random() * 2000);
//     });
//   }
  
//   function moveToPromise(x, y) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("moveTo");
//         newWindow.moveTo(x, y);
//         resolve();
//       }, Math.random() * 2000);
//     });
//   }
  
//   function closePromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("close");
//         newWindow.close();
//         resolve();
//       }, Math.random() * 2000);
//     });
//   }
  
  // resizeToPromise()
  //   .then(() => {
  //     return moveToPromise(200,200);
  //   })
  //   .then(() => {
  //     return closePromise();
  //   })
  //   .then(() => {
  //     console.log("End");
  //   })
  
//   async function start() {
//     await resizeToPromise();
//     await moveToPromise(200, 200);
//     await moveToPromise(400, 600);
//     await closePromise();
//     console.log("End Async Await");
//   }
//   start();
//   console.log('End programm');


// // 2
// const text = document.querySelector('#text');
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', changeCSS);

// function changeCSS() {
//     text.style.fontSize = '20px';
//     text.style.color = 'orange';
//     text.style.fontFamily = 'Comic Sans MS';
// }

// // 3
// const firstBtn = document.querySelector('#firstBtn');
// const secondtBtn = document.querySelector('#secondBtn');
// const thirdBtn = document.querySelector('#thirdBtn');
// const link = document.querySelector('#link');

// firstBtn.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'blue';
// });

// secondtBtn.addEventListener('dblclick', function () {
//     document.body.style.backgroundColor = 'pink';
// });

// thirdBtn.addEventListener('mousedown', function () {
//     document.body.style.backgroundColor = 'brown';
// });

// thirdBtn.addEventListener('mouseup', function () {
//     document.body.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', function () {
//     document.body.style.backgroundColor = 'yellow';
// });

// link.addEventListener('mouseout', function () {
//     document.body.style.backgroundColor = 'white';
// });


// // 4
// const select = document.querySelector('#select');
// const removeBtn = document.querySelector('#btn');

// removeBtn.addEventListener('click', function () {
//     const selectedOption = select.options[select.selectedIndex];
//     select.removeChild(selectedOption);
// });


// // 5
// const btn = document.querySelector('#btn');
// const messages = document.querySelector('.messages');

// const mouseover = '<p>Mouse on me!</p> <br>';

// btn.addEventListener('mouseover', function () {
//     const message = document.createElement('p');
//     message.textContent = 'Mouse on me!';
//     messages.appendChild(message);
// });

// btn.addEventListener('mouseout', function () {
//     const message = document.createElement('p');
//     message.textContent = 'Mouse is not on me!';
//     messages.appendChild(message);
// });

// btn.addEventListener('click', function () {
//     const message = document.createElement('p');
//     message.textContent = 'I was pressed!';
//     messages.appendChild(message);
// });