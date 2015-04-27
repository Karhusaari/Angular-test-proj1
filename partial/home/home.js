angular.module('testProj1').controller('HomeCtrl',function($scope){
	$scope.heading = 'doug';
	$scope.description = 'This is some stuff';

	
});

var getheading = function(){
		return this.heading;
	}