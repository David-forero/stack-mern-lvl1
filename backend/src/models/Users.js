const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('users', UserSchema);