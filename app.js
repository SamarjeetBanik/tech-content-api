require('dotenv').config();
const express = require('express')
const app = express()
const db = require('./db');

const ContentController = require('./ContentController');
app.use('/api', ContentController);

module.exports = app