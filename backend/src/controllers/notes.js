const ctrl = {}

const Note = require('../models/Notes');

ctrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

ctrl.createNote = async (req, res) => {
    const { title, content, author } = req.body;
    const newNote = new Note({title, content, author});
    await newNote.save();
    res.json({message: 'Created note'})
};

ctrl.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    console.log(note)
    res.json(note);
};

ctrl.updateNote = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndUpdate(id, req.body)
    res.json({message: 'Edit note'});
};

ctrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleted note'})
};

module.exports = ctrl