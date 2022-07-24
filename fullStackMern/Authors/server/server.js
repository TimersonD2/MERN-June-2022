require('./config/mongoose.config');
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

// app.use(cors()); //use this for the exam
app.use(cors({origin: 'http://localhost:3000'}));
require('./routes/author.routes')(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!!</h1>');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

