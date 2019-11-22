const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ooo')
    .then(() => console.log('mongoDB connected'))
    .catch(e => { throw (e) });

require('./routes/index')(app);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    };
    console.log(`server is listening on ${port}`);
})