
app.controller('welcomeCtrl', function($scope, $http) {

    var self = this;
    

    $scope.init = function() {
        $scope.message = "I am WelcomeCtrl";
    };

    $scope.init();

});