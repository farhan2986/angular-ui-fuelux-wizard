
angular.module("fuelux.wizard", [])
.directive('wizard', ['$compile', function($compile){
  return {
    restrict: 'A',
    scope: {change: '&',    changed: '&'},
    link: function(scope, ele, attrs){
		ele.removeAttr("wizard");
        var steps = ele.find(".wizard > .steps > li"), stepContents = ele.find(".step-content > .step-pane"), prevBtn, nextBtn;
        scope.currentStepIndex = (+ attrs.wizard)>0?(+ attrs.wizard):0;

        for(var step=0; step < steps.length; step++){//register steps
            scope.steps.push({currentStep:false});
            angular.element(steps[step]).attr('ng-class', '{active:steps['+step+'].currentStep}');
            angular.element(stepContents[step]).attr('ng-class', '{active:steps['+step+'].currentStep}');
        }
	ele.find('button.btn-prev').attr('ng-click','showPreviousStep()').attr('ng-disabled', '!hasPrevious()');
	ele.find('button.btn-next').attr('ng-click','showNextStep()').attr('ng-disabled', '!hasNext()');
        console.log(steps, scope.currentStepIndex, scope.steps)
        scope.steps[scope.currentStepIndex].currentStep = true;
        $compile(ele)(scope);
    },

    controller: function($scope){
        $scope.steps = [];
        this.registerStep = function(step){$scope.steps.push(step);}

        var toggleSteps = function(showIndex, direction){
            var event = {event: {fromStep: $scope.currentStepIndex, toStep: showIndex, direction:(direction===true?'next':'prev')}};

            if($scope.change && $scope.change(event)) return;
            $scope.steps[$scope.currentStepIndex].currentStep = false;
            $scope.currentStepIndex = showIndex;

            $scope.steps[$scope.currentStepIndex].currentStep = true;
            if($scope.changed){
                $scope.changed(event);
            }
        }
        $scope.showNextStep = function(){toggleSteps($scope.currentStepIndex + 1, true);}
        $scope.showPreviousStep = function(){toggleSteps($scope.currentStepIndex - 1);}
        $scope.hasNext = function(){return $scope.currentStepIndex < ($scope.steps.length - 1);}
        $scope.hasPrevious = function(){return $scope.currentStepIndex > 0;}

    }
  };
}]);
