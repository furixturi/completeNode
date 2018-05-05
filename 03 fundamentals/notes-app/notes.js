console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    console.log('========== Adding note ========\n', 
        'title:', title, 
        'body:', body);
    let notes = [];
    const note = {title, body};

    try {
        const notesString = fs.readFileSync('./notes.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    if(notes.filter(note => note.title === title).length === 0) {
        notes.push(note);
        fs.writeFileSync("./notes.json", JSON.stringify(notes));
    } else {
        console.log('note with title', title, 'already exists.')
    }
   
}

const getAll = () => {
    console.log('=========== Getting all notes =========\n');
}

const removeNote = (title) => {
    console.log('========= Removing note ========\n', title)
}

const getNote = (title) => {
    console.log('========= Getting note ========\n', title)
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};