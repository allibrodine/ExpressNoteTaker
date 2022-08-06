const app = require('express').Router();
//const app = require('express')
const fs = require('fs');
const path = require('path');

app.get('/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'UTF-8'));
        res.json(db);
    
});

app.post('/notes', (req, res) => {
    let notes = {
        id: Math.floor(Math.random() * 5000),
        title: req.body.title,
        text: req.body.text 
    };
    let db = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'UTF-8'));
    db.push(notes);
    fs.writeFile('./Develop/db/db.json', JSON.stringify(db), function(err, res) {
        if (err) {
            throw err
        } 

    }) 
    res.json(db);
});

app.get('/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'UTF-8'));
    let result = db.filter(note => note.id === req.params.id)
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});



module.exports = app;