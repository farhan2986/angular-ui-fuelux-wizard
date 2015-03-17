
var app = angular.module('demoApp', ['fuelux.wizard']);

app.controller('WizardController', ['$scope', function($scope){

  $scope.log = function(event){
    console.log(event);
    //if(event.direction=='next') return true;
  }

  $scope.user = {};

}]);
