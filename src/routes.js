const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
	name: 'Felipe',
	email: 'afelipe.freitas@gmail.com',
	password_hash: '4823743462734692138746238',
});

module.exports = routes;
