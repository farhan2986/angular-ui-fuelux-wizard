

var app = angular.module('demoApp', ['fuelux.wizard']);

app.controller('WizardController', ['$scope','$interval', function($scope, $interval){
  $scope.stepCurrent = 0;	
  $scope.log = function(event){
    console.log(event);
    //if(event.direction=='next') return true;
  }
  $interval(function(){$scope.stepCurrent = Math.floor(Math.random(0, 5)*5);}, 2000);
  
  $scope.$watch('stepCurrent', function(stepValue) {
      console.log("stepCurrent updated  ", stepValue, $scope.stepCurrent);
  });
}]);
