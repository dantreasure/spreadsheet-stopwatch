'use strict';

angular.module('spreadsheetStopwatchApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state('studentdata', {
      url: "/studentdata",
      templateUrl: "views/studentdata.html",
      controller: "StudentsCtrl",
      resolve: {
        students: function (studentservice) {
            return studentservice.getStudents();
        }
      }
    })
  
});