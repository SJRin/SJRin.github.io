angular.module('exercise-app').controller('get-view-allDay-ctrl', function($scope, dataService) {
	$scope.refresh = function() {
		$scope.viewAllFishData();
		$scope.viewAllBugData();
		$scope.viewAllSeaData();
	};

	var now = new Date();
	$scope.currentMonth = (now.getMonth() + 1);
	$scope.currentHour = now.getHours();
	//console.log("$scope.currentMonth");
	//console.log(now.getMonth() + 1);

	$scope.viewAllFishData = function(){
		console.log("checking for data");
		dataService.getFish().then((function(response) {
				$scope.fishs = response.data;
		})); 
	}

	$scope.viewAllBugData = function(){
		console.log("checking for data");
		dataService.getBug().then((function(response) {
				$scope.bugs = response.data;
		})); 
	}

	$scope.viewAllSeaData = function(){
		console.log("checking for data");
		dataService.getSea().then((function(response) {
				$scope.seas = response.data;
		})); 
	}
});