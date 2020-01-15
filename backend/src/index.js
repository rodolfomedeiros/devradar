const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const mongodb = require('../config').MONGODB;

const app = express();

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);