/* eslint-disable no-console */
const sum = require('./sum');

console.log(sum(1, 2).toString());

const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3003, () => console.log('Example app listening on 3003!'));
