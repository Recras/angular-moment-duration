angular-moment-duration
=======================

An AngularJS directive to modify [moment.js duration objects](http://momentjs.com/docs/#/durations/)

# Requirements

- AngularJS
- [angular-jquery-timepicker](https://github.com/Recras/angular-jquery-timepicker)
- [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)
- JQuery
- moment.js

# Usage

You can use Bower to install this directive.

    bower install angular-moment-duration

Add the module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['ui.moment-duration', 'ui.timepicker'])

The directives expects a moment.duration() object as ng-model

    <momentdurationdays ng-model="duration"></momentdurationdays>
    days and
    <momentdurationtime ng-model="duration" /></momentdurationtime>
    time

Please have look in the demo folder for a working demonstration.
