/* This is an example of a directive which has internal functionality and affects the model attached to it.
 * Also any external services can be injected here
 *   */
app.directive('menuDirective', ['$http', function($http) {
        return {
            restrict: 'AE',
            replace: true,
            /*require: 'ngModel',*/ //Needed 
            templateUrl: 'templates/menu-directive-template.html',
            scope: {
                items: "=",
            },
            controller: function($scope) {
                this.setSelectedItem = function(item) {
                    angular.forEach($scope.items, function(value, key) {

                        if(value.id === item.id){
                            value.selected = true;
                        }else{
                            value.selected = false;
                        }
                    });
                    //console.log(item);
                    $scope.selectedItem = item;
                    console.log($scope.items);
                };
            },
            /* Directive functionality should be placed here. Notice the fourth param, which is the model controller */
            link: function($scope, $linkElement, $linkAttributes /*, ngModelCtrl*/) {
                

                //console.log($http);
                //ngModelCtrl.$setViewValue($scope.menuItems[0]);

                /* setting ng-model value */
                //ngModelCtrl.$setViewValue(selectedItem);

            }
        };
    }]);