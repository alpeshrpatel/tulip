var mongoose = require('mongoose');
//schoolModel Schema
var schoolSchema = mongoose.Schema({
	
	name:{
		type: String,
		required: true
	},
	details:{
		type: String
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
	boys:{
		type: Number
	},
	girls:{
		type: Number
	},
	maleteacher:{
		type: Number //--Number of teacher
	},
	femaleteacher:{
		type: Number //--Number of teacher
	},
	type :{
		type: String //--Public / Private/ International
	},
	daycare :{
		type: Boolean
	}, 
	kg :{
		type: Boolean
	},
	primary :{
		type: Boolean
	},
	
	secondory :{
		type: Boolean
	},
	
	high :{
		type: Boolean
	},
	website:{
		type: String
	},
	starttime:{
		type: Number
	},
	endtime:{
		type: Number
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	fax:{
		type: [String]
	},
	schoolimages:{
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
module.exports.getSchools = function(callback, limit){
	School.find(callback).limit(limit);
}

// Get School
module.exports.getSchoolById = function(id, callback){
	School.findById(id, callback);
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