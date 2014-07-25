angular-moment-duration
=======================

An AngularJS directive to modify [moment.js duration objects](http://momentjs.com/docs/#/durations/)

# Requirements

- AngularJS
- moment.js

# Usage

You can use Bower to install this directive.

    bower install angular-moment-duration

Add the module as a dependency to your application module:

    var myAppModule = angular.module('MyApp', ['ui.moment-duration'])

The directives expects a moment.duration() object as ng-model

    <input momentduration="years" ng-model="duration"/>
    <input momentduration="months" ng-model="duration"/>
    <input momentduration="days" ng-model="duration"/>
    <input momentduration="hours" ng-model="duration"/>
    <input momentduration="minutes" ng-model="duration"/>
    <input momentduration="seconds" ng-model="duration"/>

Please have look in the demo folder for a working demonstration.
