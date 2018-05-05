console.log('starting app index.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

console.log("yargs.argv: ", yargs.argv);

const command = yargs.argv['_'][0];
switch(command){
    case 'add':
        notes.addNote(yargs.argv.title, yargs.argv.body);
        return;
    case 'list':
        notes.getAll();
        return;
    case 'read':
        notes.getNote(yargs.argv.title);
        return;
    case 'remove':
        notes.removeNote(yargs.argv.title);
        return;
    default:
        console.log("Command not recognized");
        return;
}