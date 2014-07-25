var app = angular.module('testApp', ['ui.moment-duration']);

app.controller('TimepickerCtrl', function ($scope) {
    $scope.duration = moment.duration({
        seconds: 30,
        minutes: 45,
        hours: 4,
        days: 70,
    });
});
