
angular.module('myApp').controller('UserController', 
		['$scope', '$http', '$location', '$routeParams', 
		 function($scope, $http, $location, $routeParams){
	console.log('UserController loaded...');

	$scope.loginmsg = false;
	$scope.registermsg = false;
	
	
	$scope.register = function(){
        console.log("register method invoke");
        if($scope.user.password === $scope.user.retypepassword) 
        {
	        $http.post('/api/users/', $scope.user).success(function(response){
				console.log("session start : " + JSON.stringify($scope.user));
				$scope.registermsg = true;
				$scope.message="User is register successfully";
			});
        }else{
        	console.log("Both password are not same");
        }
	}
    
    $scope.login = function(){
        var user = $scope.user;
        console.log("login method invoke");
        $http.get('/api/users/'+user.username).success(function(response){
           	console.log("session start : " + $scope.user);
           	$scope.loginmsg = true;
           	$scope.message ="Logged user successfully";
		});
	}
    
    $scope.forgetpassword = function(){
        var user = $scope.user;
        console.log("login method invoke");
        $http.get('/api/users/'+user.username).success(function(response){
           	console.log("session start : " + $scope.user);
		});
	}
	
	
}]);