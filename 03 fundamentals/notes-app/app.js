console.log('starting app index.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

console.log("process.argv: ", process.argv);
console.log("yargs.argv: ", yargs.argv);

// switch(command){
//     case 'add':
//         console.log("Adding a new note");
//         return;
//     case 'list':
//         console.log("Listing all notes");
//         return;
//     case 'read':
//         console.log('Reading note');
//         return;
//     case 'remove':
//         console.log('Removing note');
//         return;
//     default:
//         console.log("Command not recognized");
//         return;
// }