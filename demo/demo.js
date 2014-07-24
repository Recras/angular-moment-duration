var app = angular.module('testApp', ['ui.moment-duration', 'ui.timepicker']);

app.controller('TimepickerCtrl', function ($scope) {
    $scope.duration = moment.duration({
        minutes: 45,
        hours: 4,
        days: 6,
    });
});
