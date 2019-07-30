const express = require('express');
const fizzBuzzRouter = require('../fizzbuzz/fizzbuzz-router');

const server = express();

server.use(express.json());
server.use('/api', fizzBuzzRouter);

server.get('/', (req, res) => {
	res.send("It's working!");
});

module.exports = server;
