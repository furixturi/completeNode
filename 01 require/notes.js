console.log('Starting notes.js');

module.exports = {
    addNote: () => {
        console.log('addNote');
        return 'New note';
    },

    add: (a, b) => {
        return a + b;
    }
};