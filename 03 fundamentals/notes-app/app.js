console.log('starting app index.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

switch(command){
    case 'add':
        notes.addNote(argv.title, argv.body);
        return;
    case 'list':
        notes.getAll();
        return;
    case 'read':
        notes.getNote(argv.title);
        return;
    case 'remove':
        notes.removeNote(argv.title);
        return;
    default:
        console.log("Command not recognized");
        return;
}