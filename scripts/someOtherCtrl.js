
app.controller('someOtherCtrl', function($scope, $http) {

    var self = this;
    

    $scope.init = function() {
        $scope.message = "I am someOtherCtrl";
    };

    $scope.init();

});