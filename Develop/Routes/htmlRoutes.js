//set up path and express
const path = require('path');
const express = require('express');
const app = express();

//route to notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//route to index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//export routes
module.exports = app;