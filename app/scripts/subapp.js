'use strict';

angular.module('churchApp', [
    'ngRoute',
    'ui.bootstrap'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/3000_contents/contents.html'
            })
            .when('/0', {
                templateUrl: 'views/3000_contents/contents.html'
            })
            .when('/1', {
                templateUrl: 'views/3000_contents/contents1.html'
            })
            .when('/2', {
                templateUrl: 'views/3000_contents/contents2.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        /*$locationProvider.html5Mode(true);*/
    });