//server.js
const express = require('express');
require('dotenv').config();
const app = express();

app.use("/test", (req, res) => {
    res.send({message: process.env.HELLO});
    res.end();

});

module.exports = app;
