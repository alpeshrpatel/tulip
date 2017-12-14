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
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
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
	create_date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users
//Get Books
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}


// Get User
module.exports.getUserByUserName = function(username, callback){
	User.find({"username" : username}, callback);
}

// Add User
module.exports.addUser = function(user, callback){
	User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
			firstname: user.firstname,
			lastname: user.lastname,
			username: user.username,
			address: user.address,
			city : user.city,
			state: user.state,
			country: user.country,
			email: user.email,
			phone: user.phone,
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = function(id, callback){
	var query = {_id: id};
	User.remove(query, callback);
}