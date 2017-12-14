/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');

//School Schema
var deviceSchema = mongoose.Schema({
	
	name:{
		type: String
	},
	http_version:{
		type: String
	},
	//---Device type tablet, mobile, desktop-------
	type:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
