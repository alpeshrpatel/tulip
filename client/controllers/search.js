
angular.module('myApp').controller('SearchController', 
		['$scope', '$http', '$location', '$routeParams','FeedService', 
		 function($scope, $http, $location, $routeParams,FeedService){
	console.log('SearchController loaded...');
	$scope.filteredResult = [];
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	$scope.isResult = false;
	
//
//	FeedService.parseFeed("https://feeds.feedburner.com/EducationWeekNewsAndInformationAboutEducationIssues").then(function(res){
////        $scope.loadButonText=angular.element(e.target).text();
////        $scope.feeds=res.data.responseData.feed.entries;
////		console.log("FeedService call ");
////		console.log(res.data.responseData.feed.entries);
//		
//		for(var i =0; i<res.data.responseData.feed.entries.length;i++)
//			{
//			console.log(res.data.responseData.feed.entries[i].title);
//			}
//		
//    }); 

	
	
	$scope.getSearch = function(){
		var search = $scope.search;
		console.log("Search Invoked");
		$scope.result = [];
		$http.get('/api/schools/'+search).
		  then(function onSuccess(response) {
		    // Handle success
			//$scope.result = response;
			$scope.isResult = true;
			//console.log(response);
			
			$scope.maxSize = 5; //Number of pager buttons to show
			
			for (var i=0;i<response.data.length;i++) 
			{
				$scope.result.push(response.data[i]);
				//console.log(response.data[i]);
			}
			$scope.totalItems = $scope.result.length;
			$scope.currentPage = 1;
			$scope.displayResult();

		  });


	}
	
	 $scope.clearAll = function() {
		console.log("clearAll Invoked");
		$scope.filteredResult = [];
		$scope.itemsPerPage = 5;
		$scope.currentPage = 1;
		$scope.isResult = false;
	};
	
	
	
//	RSSService.getRssFeedData("http://feeds.feedburner.com/ndtvnews-top-stories", "http://feeds.feedburner.com/ndtvnews-top-stories",function(rss){
//		console.log(rss);
//	});
	
	 $scope.displayResult = function() {
		    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
		    var end = begin + $scope.itemsPerPage;
		    //console.log(begin + ": " + end );
		    $scope.filteredResult = $scope.result.slice(begin, end);
		   // console.log($scope.filteredResult);
		  };
	
	 $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	 };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    $scope.displayResult();
	  };

	$scope.setItemsPerPage = function(num) {
	  $scope.itemsPerPage = num;
	  $scope.currentPage = 1; //reset to first paghe
	}
}]);