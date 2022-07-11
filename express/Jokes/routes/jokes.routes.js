const jokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.post('/api/jokes', jokeController.createJoke);
    app.get('/api/jokes', jokeController.getJokes);
    app.get('/api/jokes/:id', jokeController.getJokeById);
    app.put('/api/jokes/:id', jokeController.updateJokeById);
    app.delete('/api/jokes/:id', jokeController.deleteJoke);
};
