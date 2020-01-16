const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const MONGODB = require('../config').MONGODB;

const app = express();

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);