const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let notesSchema = new Schema({
    title: String,
    notes: String,
});

module.exports = mongoose.model('Notes', notesSchema);