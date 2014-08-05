
app.controller('mainCtrl', function( $scope, $http ) {

    var self = this;
    

    $scope.init = function() {
        $scope.message = "I am MainCtrl";
    };

    $scope.init();

});
