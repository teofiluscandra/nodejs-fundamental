/*
*	Primary file of the API
*/

// Depedencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');

const app = {};

app.init = (callback) => {
	server.init();
	workers.init();

	// start cli, last
	setTimeout(() => {
		cli.init();
		callback();
	}, 50);
};

// Self invoking only if required directly

if (require.main === module) {
	app.init(() => {});
}

module.exports = app;
