const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({}, {collection: 'users'});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;