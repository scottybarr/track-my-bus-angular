'use strict';

var app = angular.module('bus', []);
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

function BusStopController($scope) {
    $scope.stopName = "Princes Street";
    $scope.stopCode = 123456;
}

function BusServiceController($scope) {

}