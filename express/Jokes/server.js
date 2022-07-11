require('./config/mongoose.config');

const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());
require('./routes/jokes.routes')(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!!</h1>');
});

app.listen(PORT, () => console.log('App is up and Running!'));
