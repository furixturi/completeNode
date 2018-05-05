console.log('Starting notes.js');

const addNote = (title, body) => {
    console.log('========== Adding note ========\n', 
        'title:', title, 
        'body:', body);
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