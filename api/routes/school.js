var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })

var School= require('../../models/school')

var router = express.Router();

//-----------------schools----------------------

router.get('/api/schools', function(req, res){
	console.log("List of School-->");
	School.getSchools(function(err, schools){
		if(err){
			throw err;
		}
		console.log("List of School-->" + schools);
		res.json(schools);
	});
});

router.get('/api/schools/:search', function(req, res){
	School.getSchoolsByName(req.params.search, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});

//app.get('/api/schools/:_id', function(req, res){
//	School.getSchoolById(req.params._id, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});

//router.post('/api/schools', upload.any(),function(req, res){
//	console.log("HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
//	var book = req.body;
//	School.addSchool(book, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});


router.post('/api/schools', upload.any(),function(req, res){
	console.log("HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
	
	res.send(
			req.files
	);
});



router.put('/api/schools/:_id', function(req, res){
	var id = req.params._id;
	var school = req.body;
	School.updateSchool(id, book, {}, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});

router.delete('/api/schools/:_id', function(req, res){
	var id = req.params._id;
	School.removeSchool(id, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});


module.exports = router
