console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age} years old!\n`);

var res = notes.addNote();
console.log(res);

console.log('Result: ', notes.add(9, -2));