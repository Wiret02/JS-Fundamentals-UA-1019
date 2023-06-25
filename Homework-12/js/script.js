// Homework №12 //


// // 1
// const http = require('http');
// const os = require('os');
// const path = require('path');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'content-type': 'text/html' });
//     response.write('<h1>System information:</h1>');
//     response.write(`<p>User name: ${os.userInfo().username}</p>`);
//     response.write(`<p>OS type: ${os.type()}</p>`);
//     response.write(`<p>System work time: ${(os.uptime() / 60).toFixed(2)} minutes</p>`);
//     response.write(`<p>Current work directory: ${path.basename(__dirname)}</p>`);
//     response.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
//     response.end();
// }).listen(5000)

// console.log('Server is running on port 5000');


// // 2
// const http = require('http');
// const personalmodule = require('./personalmodule');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
//     response.write(`<p>Date of requesst: ${personalmodule.currentDate}</p>`);
//     response.write(`<p>${personalmodule.Greeting()}</p>`);

//     response.end();
// }).listen(5000)

// console.log("Server is running on port 5000");
