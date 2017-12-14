var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

var Genre =require('./models/genre');
var Book =require('./models/book');
var School= require('./models/school')
var User= require('./models/user')

//var schoolapi = require('./api/routes/school');
// Connect to Mongoose
mongoose.connect('mongodb://localhost/wis');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});


//-----------------schools----------------------

app.get('/api/schools', function(req, res){
	console.log("-->List of School-->");
	School.getSchools(function(err, schools){
		if(err){
			throw err;
		}
		console.log("List of School-->" + schools);
		res.json(schools);
	});
});

app.get('/api/schools/:search', function(req, res){
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

app.post('/api/schools', function(req, res){
	var book = req.body;
    console.log("Inside /api/schools");
	School.addSchool(book, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.put('/api/schools/:_id', function(req, res){
	var id = req.params._id;
	var school = req.body;
	School.updateSchool(id, book, {}, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.delete('/api/schools/:_id', function(req, res){
	var id = req.params._id;
	School.removeSchool(id, function(err, school){
		if(err){
			throw err;
		}
		res.json(school);
	});
});


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