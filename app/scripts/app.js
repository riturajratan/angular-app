'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
var angularAppApp=angular
  .module('angularAppApp', ['ngRoute']);


//Now Configure  our  routing
angularAppApp.config(function ($routeProvider) {
   $routeProvider
    // set route for the home page
    .when('/',
    {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
    })
    // set for particlur one cat page
    .when('/cat/:cat',
    {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
    })
    // set for particlur one news
    .when('/news/:cat/:newsid',
    {
        controller: 'NewsCtrl',
        templateUrl: 'views/news.html'
    })
    // if not match with any route config then send to main page
     .otherwise({
        redirectTo: '/'
      });


});
