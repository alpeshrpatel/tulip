var mongoose = require('mongoose');
//headerModel Schema
var headerSchema = mongoose.Schema({
	
	header:{
		type: String,
		required: true
	},
	details:{
		type: String
	}
});


var Header = module.exports = mongoose.model('Header', headerSchema);

// Get Headers
module.exports.getHeaders = function(callback, limit){
	Header.find(callback).limit(limit);
}

// Get Header
module.exports.getHeaderById = function(id, callback){
	Header.findById(id, callback);
}

module.exports.getHeadersByHeader = function(header , callback, limit){
	Header.find({'header' : new RegExp(header,'i')},callback).limit(limit);
}


// Add Header
module.exports.addHeader = function(header, callback){
	Header.create(header, callback);
}

// Update Header
module.exports.updateHeader = function(id, header, options, callback){
	var query = {_id: id};
	var update = {
			header: header.header,
			details: header.details
	}
	Header.findOneAndUpdate(query, update, options, callback);
}

// Delete Header
module.exports.removeHeader = function(id, callback){
	var query = {_id: id};
	Header.remove(query, callback);
}