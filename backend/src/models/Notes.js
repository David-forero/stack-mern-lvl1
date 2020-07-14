const { Schema, model } = require('mongoose');

const NotesSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('notes', NotesSchema);