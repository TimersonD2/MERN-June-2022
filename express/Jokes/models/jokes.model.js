const mongoose = require('mongoose');

const JokeSchema = mongoose.Schema({joke:String}, {timestamps:true});

const joke = mongoose.model('joke', JokeSchema);

module.exports = joke;
