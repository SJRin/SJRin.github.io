angular.module('exercise-app',['ngRoute']);

angular.module('exercise-app').config(function($routeProvider){
   $routeProvider
   .when('/',{
       templateUrl: 'home.html'
   })
   .when('/view', {
       templateUrl: 'viewData/viewData.html',
       controller: 'get-view-ctrl'
   })
      .when('/viewAllDay', {
       templateUrl: 'allDayYear/viewAllDayData.html',
       controller: 'get-view-allDay-ctrl'
   })
       .when('/viewCurrent', {
       templateUrl: 'currentAvailable/viewCurrent.html',
       controller: 'get-view-current-ctrl'
   })
      .when('/viewNew', {
       templateUrl: 'newMonth/viewNew.html',
       controller: 'get-view-new-ctrl'
   })
      .when('/viewLeaving', {
       templateUrl: 'leavingMonth/viewLeaving.html',
       controller: 'get-view-leaving-ctrl'
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