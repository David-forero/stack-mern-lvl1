const { Router } = require('express');
const router = Router();

//Controladores 
const notes = require('../controllers/notes');

router.route('/')
    .get(notes.getNotes)
    .post(notes.createNote);

router.route('/:id')
    .delete(notes.deleteNote)
    .put(notes.updateNote)
    .get(notes.getNote)    

module.exports = router;