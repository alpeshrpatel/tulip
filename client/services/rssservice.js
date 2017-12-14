//var feed = require("feed-read");

//angular.module('myApp').service('rssService',function(){
//	return {
//		getRssFeedData : function(input,callback)
//		{
//			var rss = []
//			feed(input, function(err, articles) {
//			  if (err) throw err;
//			  for (var i = 0; i < articles.length; i++) {
//				  rss.push(articles[i].title); 
//				  //console.log(articles[i].title);
//			  }  
//			  callback(rss);
//			});
//		}
//	}
//});



angular.module('myApp').factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);