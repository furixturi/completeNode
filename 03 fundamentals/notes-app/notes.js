console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync("./notes.json");
        return JSON.parse(notesString);
    } catch (e) { //If the notes.json wasn't created yet
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
}

const addNote = (title, body) => {
    console.log('========== Adding note ========\n', 
        '=> title:', title, 
        '=> body:', body);
    const notes = fetchNotes();
    const note = {title, body};

    if(notes.filter(note => note.title === title).length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Error: note with the title', title, 'already exists.')
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