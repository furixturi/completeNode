// var obj = {
//     name: 'Xiaoli'
// };

// var stringObj = JSON.stringify(obj);
// console.log('=> typeof stringObj:\n', typeof stringObj);
// console.log('=> content of stringObj:\n', stringObj);

// var personString = '{"name": "Xiaoli", "age": 25}';
// var person = JSON.parse(personString);
// console.log('=> typeof person:\n', typeof person);
// console.log('=> content of person:\n', person);


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body texts'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log('=> typeof note:\n', typeof note)
console.log('=> content of note:\n', note)
