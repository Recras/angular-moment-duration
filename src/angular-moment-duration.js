/*global angular */
/*
 Directive for moment.js duration

 */
angular.module('ui.moment-duration', [])

.directive('momentdurationdays', [function() {
    return {
        restrict: 'E',
        require: 'ngModel',
        priority: 1,
        template: '<input type="number" ng-model=days min=0>',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$render = function () {
                var duration = ngModel.$modelValue;
                scope.days = Math.floor(duration.asDays());

                scope.$watch('days', function() {
                    var curDays = Math.floor(duration.asDays());
                    var diff = moment.duration(scope.days - curDays, 'd');
                    duration.add(diff);
                });
            };
        }
    };
}])

.directive('momentdurationtime', [function() {
    return {
        restrict: 'E',
        require: 'ngModel',
        priority: 1,
        template: '<input ui-timepicker ng-model=time>',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$render = function () {
                var duration = ngModel.$modelValue;

                scope.time = new Date();
                scope.time.setHours(duration.hours());
                scope.time.setMinutes(duration.minutes());

                scope.$watch('time', function() {
                    var diff = moment.duration({
                        hours: scope.time.getHours() - duration.hours(),
                        minutes: scope.time.getMinutes() - duration.minutes(),
                    });
                    duration.add(diff);
                });
            };
        }
    };
}]);
