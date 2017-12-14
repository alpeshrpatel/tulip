var express = require('express');
var device = require('express-device');

var userModel= require('../../models/user');
var deviceModel= require('../../models/device');


var router = express.Router();

//-----------------users----------------------

router.get('/users', function(req, res){
	//console.log("List of userModel-->");
	console.log(req.headers['user-agent'].toLowerCase());
	//-----Adding device entry----------
	var devicePayload ={};
	devicePayload.name = req.headers['user-agent'].toLowerCase();
	devicePayload.type = req.headers['user-agent'].toLowerCase();
	devicePayload.httpversion = req.headers['user-agent'].toLowerCase();
	deviceModel.addDevice(devicePayload,function(err){
		if(err){
			console.log(err);
			throw err;
		}else{
			console.log(devicePayload);
		}
	});
	//-----Adding device entry----------
	
	
	userModel.getUsers(function(err, users){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of userModel-->" + users);
		res.json(users);
	});
});

//---Search By Name-----------
router.get('/users/:search', function(req, res){
	userModel.getUsersByName(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
		
		
	});
});

router.get('/users/zipcode/:search', function(req, res){
	userModel.getUsersByZipcode(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});

router.get('/users/city/:search', function(req, res){
	userModel.getUsersByCity(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});


router.get('/users/id/:search', function(req, res){
	userModel.getUserById(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});

router.post('/users', function(req, res){
	var user = req.body;
	console.log(user);
	userModel.addUser(user, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(user);
	});
});

router.put('/users/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
	console.log(user);
	userModel.updateUser(id, user, {}, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(user);
	});
});

router.delete('/users/:_id', function(req, res){
	var id = req.params._id;
	userModel.removeUser(id, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(user);
	});
});


module.exports = router
