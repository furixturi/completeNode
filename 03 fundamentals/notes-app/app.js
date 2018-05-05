console.log('starting app index.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't' // So user can use -t as a shorthand for --title
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', "List all notes")
    .help() // So user can use --help flag to get help
    .argv;
const command = argv._[0];

switch(command){
    case 'add':
        const note = notes.addNote(argv.title, argv.body);
        console.log(note ? '========= New note added ========' : 
            '========== Adding note failed =========')
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