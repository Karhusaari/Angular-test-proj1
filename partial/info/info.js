angular.module('testProj1').controller('InfoCtrl',['$scope', function($scope){
	

	$scope.description = 'This is the info page.';

	$scope.setColors = function(){
		$scope.values = ['red', 'blue', 'green', 'orange', 'yellow'];
	};

	$scope.setStates = function(){
		$scope.values = ['OH', 'WY', 'MT', 'CO', 'NY'];
	};


	$scope.getValues = function(){
		return $scope.values;
	};

}]);