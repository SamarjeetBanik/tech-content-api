require('dotenv').config();

const express = require('express')
const app = express()

const mongoose = require('mongoose');

const ContentController = require('./ContentController');
app.use('/', ContentController);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => {
    console.log(err);
})

module.exports = app