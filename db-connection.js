var mongoose = require('mongoose');

// var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mondoDB, {
	useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));