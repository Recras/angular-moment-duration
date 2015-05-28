/*global angular */
/*
 Directive for moment.js duration

 */
angular.module('ui.moment-duration', [])

.directive('momentduration', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        priority: 1,
        scope: {
            type: '@momentduration',
            maxUnit: '@maxUnit'
        },
        link: function (scope, element, attrs, ngModel) {
            ngModel.$render = function () {
                if (!ngModel.$modelValue) {
                    return;
                }
                var duration = moment.duration(ngModel.$modelValue);

                var value;
                if (attrs.maxUnit === undefined) {
                    value = duration.get(scope.type);
                }
                else {
                    value = duration.as(scope.type);
                }

                if (attrs.type === undefined) {
                    attrs.$set('type', 'number');
                }

                if (attrs.min === undefined) {
                    attrs.$set('min', '0');
                }

                if (attrs.max === undefined) {
                    var maxVal;
                    switch (scope.type) {
                        case 'seconds':
                        case 'minutes':
                            maxVal = 59;
                            break;
                        case 'hours':
                            maxVal = 23;
                            break;
                        case 'days':
                            maxVal = 29; // 30 days == 1 month in moment
                            break;
                        case 'months':
                            maxVal = 11;
                            break;
                    }
                    if (maxVal) {
                        attrs.$set('max', maxVal);
                    }
                }

                element.val(Math.floor(value));
            };

            ngModel.$parsers.unshift(function (viewValue) {
                var duration = ngModel.$modelValue;
                var newValue;
                if (scope.maxUnit === undefined) {
                    newValue = duration.get(scope.type);
                }
                else {
                    newValue = Math.floor(duration.as(scope.type));
                }
                var diff = moment.duration(viewValue - newValue, scope.type);
                duration.add(diff);
                return moment.duration(duration);
            });
        }
    };
}]);
