var app = angular.module('bus', []);
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

function StopInfoController($scope, $http) {

};

function ServiceInfoController($scope) {

};