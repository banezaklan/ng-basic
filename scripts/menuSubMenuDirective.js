
app.directive('menuSubMenuDirective', ['$http', function($http) {
        return {
            restrict: 'AE',
            /*require: 'ngModel',*/
            templateUrl: 'templates/menu-sub-menu-directive-template.html',
            require: '^menuDirective',
            scope: {
                items: "=",
                /*setSelectedItem: "&"*/
            },
            replace: true,
            /* Directive functionality should be placed here. Notice the fourth param, which is the model controller */
            link: function($scope, $linkElement, $linkAttributes, menuDirectiveCtrl) {

                $scope.selectedItem = undefined;


                /* scope method called from the directive template */
//                $scope.selectMenuItem = function(selectedItem) {
//                    console.log("menuItemDirective selectMenuItem");
//                    menuDirectiveCtrl.setSelectedItem(selectedItem);
//                };
            }
        };
    }]);