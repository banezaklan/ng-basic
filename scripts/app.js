
var app = angular.module("myApp", [
    'ngRoute'
]);
//var app = angular.module("myApp", ['ngResource', 'ServerMock']);

app.config([
    '$routeProvider',
    '$locationProvider',
    function(
            $routeProvider,
            $locationProvider
            ) {
        $routeProvider.
                when('/Welcome', {
                    templateUrl: 'templates/welcome-template.html',
                    controller: 'welcomeCtrl'
                }).
                when('/SomeOther', {
                    templateUrl: 'templates/some-other-template.html',
                    controller: 'someOtherCtrl'
                }).
                otherwise({
                    redirectTo: '/Welcome'
                });
        
        $locationProvider.html5Mode(true);
        
    }]);
