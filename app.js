
var app = angular.module('demoApp', ['fuelux.wizard']);

app.controller('WizardController', ['$scope', function($scope){
  $scope.stepCurrent = 2;	
  $scope.log = function(event){
    console.log(event);
    //if(event.direction=='next') return true;
  }
  $scope.$watch('stepCurrent', function(stepValue) {
      console.log("stepCurrent updated  ", stepValue, $scope.stepCurrent);
  });
  $scope.user = {};

}]);
