var myApp = angular.module('myApp',['ngRoute', 'ui.bootstrap','ngMessages']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller:'SearchController',
		templateUrl: 'views/search/search.html'
	})
	.when('/home', { templateUrl: 'views/search/search.html'})
	.when('/login', { 
		controller:'UserController',
		templateUrl: 'views/login/login.html'})
	.when('/signup', {
		controller:'UserController',
		templateUrl: 'views/login/signup.html'
			})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.when('/schools/add', {
		controller:'SchoolsController',
		templateUrl: 'views/add_school.html'
	})
	.otherwise({
		redirectTo: '/index.html'
	});
});