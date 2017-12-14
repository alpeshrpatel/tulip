var mongoose = require('mongoose');

//School Schema
var schoolSchema = mongoose.Schema({
	
	name:{
		type: String,
		required: true
	},
	address:{
		type: String
	},
	city:{
		type: String,
		required: true
	},
	zipcode:{
		type: String,
		required: true
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	students:{
		type: String
	},
	teachers:{
		type: String
	},
	website:{
		type: String
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	deviceid :{
		type: String
	}
});

var School = module.exports = mongoose.model('School', schoolSchema);

// Get Schools


module.exports.getSchools = function(name , callback, limit){
	School.find({},callback).limit(limit);
}

module.exports.getSchoolsByName = function(name , callback, limit){
	School.find({'name' : new RegExp(name,'i')},callback).limit(limit);
}

module.exports.getSchoolsByZipcode = function(zipcode , callback, limit){
	School.find({'zipcode' : zipcode },callback).limit(limit);
}


module.exports.getSchoolsByCity = function(city , callback, limit){
	School.find({'city' : city },callback).limit(limit);
}

//// Get School
//module.exports.getSchoolById = function(id, callback){
//	School.findById(id, callback);
//}

//Get School
module.exports.getSchoolByName = function(name, callback){
	School.find({name : name}, callback);
}

// Add School
module.exports.addSchool = function(school, callback){
	School.create(school, callback);
}

// Update School
module.exports.updateSchool = function(id, school, options, callback){
	var query = {_id: id};
	var update = {
			name: school.name,
			address: school.address,
			city : school.city,
			state: school.state,
			country: school.country,
			students: school.students,
			teachers: school.teachers,
			website: school.website,
			email: school.email,
			phone: school.phone,
	}
	School.findOneAndUpdate(query, update, options, callback);
}

// Delete School
module.exports.removeSchool = function(id, callback){
	var query = {_id: id};
	School.remove(query, callback);
}