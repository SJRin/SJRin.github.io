angular.module('exercise-app',['ngRoute']);

angular.module('exercise-app').config(function($routeProvider){
   $routeProvider
   .when('/',{
       templateUrl: 'home.html'
   })
   .when('/view', {
       templateUrl: 'viewData/viewData.html',
       controller: 'main-ctrl'
   })
      .when('/viewAllDay', {
       templateUrl: 'allDayYear/viewAllDayData.html',
       controller: 'main-ctrl'
   })
       .when('/viewCurrentNorth', {
       templateUrl: 'north/viewCurrentNorth.html',
       controller: 'main-ctrl'
   })
      .when('/viewNewNorth', {
       templateUrl: 'north/viewNewNorth.html',
       controller: 'main-ctrl'
   })
      .when('/viewLeavingNorth', {
       templateUrl: 'north/viewLeavingNorth.html',
       controller: 'main-ctrl'
   })
   .when('/viewCurrentSouth', {
    templateUrl: 'south/currentSouthern.html',
    controller: 'main-ctrl'
})
   .when('/viewNewSouth', {
    templateUrl: 'south/newSouthern.html',
    controller: 'main-ctrl'
})
.when('/viewLeavingSouth', {
    templateUrl: 'south/leavingSouthern.html',
    controller: 'main-ctrl'
})
   .otherwise({
       redirectTo: '/'
   })
});

angular.module('exercise-app').service('dataService', ['$http', function($http){
    let urlBase = "https://acnhapi.com/v1/";
    this.getFish = function(){
        return $http.get(urlBase+"fish");
    };
	this.getBug = function(){
        return $http.get(urlBase+"bugs");
    };
	this.getSea = function(){
        return $http.get(urlBase+"sea");
    };
}]);