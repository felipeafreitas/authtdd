const express = require('express');
require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class AppController {
	constructor() {
		this.express = express();

		this.middleswares();
		this.routes();
	}

	middleswares() {
		this.express.use(express.json());
	}

	routes() {
		this.express.use(require('./routes'));
	}
}
module.exports = new AppController().express;
