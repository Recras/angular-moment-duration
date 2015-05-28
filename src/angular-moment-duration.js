/*global angular */
/*
 Directive for moment.js duration

 */
angular.module('ui.moment-duration', [])

.directive('momentduration', [function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        priority: 1,
        scope: {
            type: '@momentduration'
        },
        link: function(scope, element, attrs, ngModel) {
            ngModel.$render = function () {
                var duration = ngModel.$modelValue;
                if (!duration) {
                    return;
                }
                attrs.$set('type', 'number');
                attrs.$set('min', '0');

                var value;
                switch (scope.type) {
                    case 'years':
                        value = Math.floor(duration.years());
                        break;
                    case 'months':
                        value = Math.floor(duration.months());
                        attrs.$set('max', '11');
                        break;
                    case 'days':
                        value = Math.floor(duration.days());
                        attrs.$set('max', '29');
                        break;
                    case 'hours':
                        value = Math.floor(duration.hours());
                        attrs.$set('max', '23');
                        break;
                    case 'minutes':
                        value = Math.floor(duration.minutes());
                        attrs.$set('max', '59');
                        break;
                    case 'seconds':
                        value = Math.floor(duration.seconds());
                        attrs.$set('max', '59');
                        break;
                }
                element.val(value);
            };


            ngModel.$parsers.unshift(function(viewValue){
                var duration = ngModel.$modelValue;
                var diff;
                switch (scope.type) {
                    case 'years':
                        diff = moment.duration(viewValue - duration.years(), 'years');
                        break;
                    case 'months':
                        diff = moment.duration(viewValue - duration.months(), 'months');
                        break;
                    case 'days':
                        diff = moment.duration(viewValue - duration.days(), 'days');
                        break;
                    case 'hours':
                        diff = moment.duration(viewValue - duration.hours(), 'hours');
                        break;
                    case 'minutes':
                        diff = moment.duration(viewValue - duration.minutes(), 'minutes');
                        break;
                    case 'seconds':
                        diff = moment.duration(viewValue - duration.seconds(), 'seconds');
                        break;
                }
                duration.add(diff);
                return moment.duration(duration);
            });
        }
    };
}]);
