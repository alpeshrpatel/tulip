var mongoose = require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
	
	firstname:{
		type: String,
		//required: true
	},
	lastname:{
		type: String,
		//required: true
	},
	address:{
		type: String
	},
	city:{
		type: String,
		//required: true
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	active:{
		type: Boolean
	},
});