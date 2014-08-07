
app.controller('mainCtrl', function( $scope, $http ) {
    
    var self = this;
    
    
    $scope.init = function() {
        $scope.message = "I am MainCtrl";
        $scope.money = "100$";
        $scope.menuItemSelection = "";
        $scope.menuItems = [ 
                {'id':1, label:'Home',url:'Welcome', selected:true,
                    subItems: [
                        {'id':11, label:'Option 1',url:'Welcome', selected:true},
                        {'id':12, label:'Option 2',url:'Welcome', selected:true},
                        {'id':13, label:'Option 3',url:'Welcome', selected:true}
                    ]
                },
                {'id':2, label:'Some Other',url:'SomeOther', selected:false, subItems: []},
                {'id':3, label:'Link3',url:'Link3', selected:false, subItems: []},
                {'id':4, label:'Link4',url:'Link4', selected:false, subItems: []},
                {'id':5, label:'Link5',url:'Link5', selected:false, subItems: []},
            ];            
    };

    $scope.init();

});
