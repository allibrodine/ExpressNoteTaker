//set path, express and file system
const app = require('express').Router();
const fs = require('fs');
const path = require('path');

//read current notes
app.get('/notes', (req, res) => {
    let read = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
        //display results
        res.json(read);
});

//post request to add a new note
app.post('/notes', (req, res) => {
    //new note object
    let notes = {
        id: Math.floor(Math.random() * 5000),
        title: req.body.title,
        text: req.body.text 
    };
    //add new note to json
    let read = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
        read.push(notes);
    
    //write file with new note
    fs.writeFile('./db/db.json', JSON.stringify(read), function(err, res) {
        if (err) {
            throw err
        } 

    }) 
    //display results
    res.json(read);
});

//selects note by ID and displays it
app.get('/notes/:id', (req, res) => {
    //reads file
    let read = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
    //select note by ID with filter method
    let result = read.filter(note => note.id === req.params.id)
    if (result) {
        //display selected note
        res.json(result);
    } else {
        res.send(404);
    }
});

//selects note by ID to delete it
app.delete('/notes/:id', (req, res) => {
    let read = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
    //select file to delete
    let deleteNote = read.filter(note => note.id != req.params.id)
    //write file minus the deleted note
    fs.writeFile('./db/db.json', JSON.stringify(deleteNote), function(err, res) {
        if (err) {
            throw err
        } 
    }) 
    //display result after note has been deleted
    res.json(deleteNote);
});

//export route functions
module.exports = app;