const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Users', usersSchema);