var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require('config');
var cors = require('cors')
//var device = require('express-device');
var app = express();

//console.log(config);
//console.log(JSON.stringify(config.mongodb));




app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
app.use(cors())

var Genre =require('./models/genre');
var Book =require('./models/book');
var School= require('./models/school');
var Header= require('./models/header');
var Quote= require('./models/quote');
var User= require('./models/user');

//var schoolapi = require('./api/routes/school');
// Connect to Mongoose
//mongoose.connect('mongodb://localhost/wis');


var mongoconnectstring = 'mongodb://'+config.mongodb.server+':'+config.mongodb.port+'/'+config.mongodb.database;
console.log(mongoconnectstring);
mongoose.connect(mongoconnectstring);

var db = mongoose.connection;
//console.log(db);

var schoolRoute = require('./api/routes/schoolRoute');
app.use('/api', schoolRoute);


var cityRoute = require('./api/routes/cityRoute');
app.use('/api', cityRoute);

var headerRoute = require('./api/routes/headerRoute');
app.use('/api', headerRoute);

var quoteRoute = require('./api/routes/quoteRoute');
app.use('/api', quoteRoute);

//app.use(device.capture());


app.get('/', function(req, res){
	res.send('API module is up ');
});
//
//app.get('/api/genres', function(req, res){
//	Genre.getGenres(function(err, genres){
//		if(err){
//			throw err;
//		}
//		res.json(genres);
//	});
//});
//
//app.post('/api/genres', function(req, res){
//	var genre = req.body;
//	Genre.addGenre(genre, function(err, genre){
//		if(err){
//			throw err;
//		}
//		res.json(genre);
//	});
//});
//
//app.put('/api/genres/:_id', function(req, res){
//	var id = req.params._id;
//	var genre = req.body;
//	Genre.updateGenre(id, genre, {}, function(err, genre){
//		if(err){
//			throw err;
//		}
//		res.json(genre);
//	});
//});
//
//app.delete('/api/genres/:_id', function(req, res){
//	var id = req.params._id;
//	Genre.removeGenre(id, function(err, genre){
//		if(err){
//			throw err;
//		}
//		res.json(genre);
//	});
//});
//
//app.get('/api/books', function(req, res){
//	Book.getBooks(function(err, books){
//		if(err){
//			throw err;
//		}
//		res.json(books);
//	});
//});
//
//app.get('/api/addBook', function(req, res){
//	var document={
//		title: "The Majnoo",
//		genre: "905-1050",
//		description: "How to do Majnoogiri",
//		author: "Jainam Gandhi",
//		publisher: "Nirmal Panchal",
//		pages: "5000",
//		image_url: "",
//		buy_url: ""
//	};
//	Book.addBook(document,function(err){
//		if(err){
//			throw err;
//		}
//		res.json(document);
//	});
//});
//
//app.get('/api/books/:_id', function(req, res){
//	Book.getBookById(req.params._id, function(err, book){
//		if(err){
//			throw err;
//		}
//		res.json(book);
//	});
//});
//
//app.post('/api/books', function(req, res){
//	var book = req.body;
//	Book.addBook(book, function(err, book){
//		if(err){
//			throw err;
//		}
//		res.json(book);
//	});
//});
//
//app.put('/api/books/:_id', function(req, res){
//	var id = req.params._id;
//	var book = req.body;
//	Book.updateBook(id, book, {}, function(err, book){
//		if(err){
//			throw err;
//		}
//		res.json(book);
//	});
//});
//
//app.delete('/api/books/:_id', function(req, res){
//	var id = req.params._id;
//	Book.removeBook(id, function(err, book){
//		if(err){
//			throw err;
//		}
//		res.json(book);
//	});
//});


////-----------------schools----------------------
//
//app.get('/api/addSchool', function(req, res){
//	var document = {
//			name: "ppshroff",
//			address: "station road",
//			city : "padra",
//			zipcode:"391440",
//			state: "Gujarat",
//			country: "India",
//			boys: 500,
//			girl:400,
//			maleteacher: 10,
//			femaleteacher: 10,
//			type : "public",
//			daycare: false,
//			kg : false,
//			primary : true,
//			secondary: true,
//			high:true,
//			website: "www.ppshroff.com",
//			starttime: 7,
//			endtime:5,
//			email: ["support@ppshroff.com"],
//			phone: ["22294"],
//	};
//	School.addSchool(document,function(err){
//		if(err){
//			throw err;
//		}
//		res.json(document);
//	});
//});
//
//
//app.get('/api/schools', function(req, res){
//	console.log("-->List of School-->");
//	School.getSchools(function(err, schools){
//		if(err){
//			throw err;
//		}
//		console.log("List of School-->" + schools);
//		res.json(schools);
//	});
//});
//
//app.get('/api/schools/:search', function(req, res){
//	School.getSchoolsByName(req.params.search, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});

//app.get('/api/schools/:_id', function(req, res){
//	School.getSchoolById(req.params._id, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});
//
//app.post('/api/schools', function(req, res){
//	var book = req.body;
//    console.log("Inside /api/schools");
//	School.addSchool(book, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});
//
//app.put('/api/schools/:_id', function(req, res){
//	var id = req.params._id;
//	var school = req.body;
//	School.updateSchool(id, book, {}, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});
//
//app.delete('/api/schools/:_id', function(req, res){
//	var id = req.params._id;
//	School.removeSchool(id, function(err, school){
//		if(err){
//			throw err;
//		}
//		res.json(school);
//	});
//});


//app.use(schoolapi);

//----------------User--------------------------
app.get('/api/users', function(req, res){
	console.log("List of User-->");
	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		console.log("List of User-->" + users);
		res.json(users);
	});
});

app.get('/api/users/:username', function(req, res){
	User.getUserByUserName(req.params.username, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/users', function(req, res){
	var user = req.body;
	User.addUser(user, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', function(req, res){
	var id = req.params._id;
	User.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});


app.listen(5000);
console.log('Running on port 5000...');