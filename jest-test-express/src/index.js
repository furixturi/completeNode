/* eslint-disable no-console */
const app = require('./app');
const handleListen = require('./handleListen');

const PORT = 3003;
app.listen(PORT, handleListen(console.log, PORT));
