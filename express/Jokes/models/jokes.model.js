const mongoose = require('mongoose');

const JokeSchema = mongoose.Schema({joke:String}, {timestamps:true});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
