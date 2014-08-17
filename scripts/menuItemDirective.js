
app.directive('menuItemDirective', [ '$http', function($http) {
    return {
        restrict: 'AE',
        /*require: 'ngModel',*/
        templateUrl: 'templates/menu-item-directive-template.html',
        require: '^menuDirective',
        scope:{
            item: "=",
            setSelectedItem: "&"
        },
        replace: true,
        /* Directive functionality should be placed here. Notice the fourth param, which is the model controller */
        link: function($scope, $linkElement, $linkAttributes, menuDirectiveCtrl){
            
            $scope.selectedItem = undefined;
            //$scope.item.subItems = [];
//            $scope.item.subItems = [ 
//                {'id':11, label:'Option 1',url:'Option-1', selected:true},
//                {'id':12, label:'Option 2',url:'Option-2', selected:false},
//                {'id':13, label:'Option 3',url:'Option-3', selected:false},
//            ];
            /* scope method called from the directive template */
            $scope.selectMenuItem = function(selectedItem){
                console.log("menuItemDirective selectMenuItem");
                menuDirectiveCtrl.setSelectedItem(selectedItem);
            };
        }
    };
}]);