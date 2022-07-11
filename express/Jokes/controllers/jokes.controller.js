const Joke = require('../models/jokes.model');

const createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.status(201).json(newJoke);
        })
        .catch((err) => console.log('Error creating Joke', err));
};

const getJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.status(201).json(allJokes);
        })
        .catch((err) => console.log('Error getting all Jokes', err));
};

const getJokeById = (req, res) => {
    Joke.findById(req.params.id)
        .then((oneJoke) => {
            res.status(201).json(oneJoke);
        })
        .catch((err) => console.log('Error getting one Joke', err));
};

const updateJokeById = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedJoke) => {
            res.status(201).json(updatedJoke);
        })
        .catch((err) => console.log('Error updating one Joke', err));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne(req.body)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => console.log('Error getting one Joke', err));
};

module.exports = {
    createJoke,
    getJokes,
    getJokeById,
    updateJokeById,
    deleteJoke,
}