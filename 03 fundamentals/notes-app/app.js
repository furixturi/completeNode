console.log('starting app index.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command: ', command);

switch(command){
    case 'add':
        console.log("Adding a new note");
        return;
    case 'list':
        console.log("Listing all notes");
        return;
    case 'read':
        console.log('Reading note');
        return;
    case 'remove':
        console.log('Removing note');
        return;
    default:
        console.log("Command not recognized");
        return;
}