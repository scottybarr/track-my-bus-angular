'use strict';

var app = angular.module('bus', []).
    config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
});

app.factory('StopModel', function() {
    var StopModel = {};
    var list = [];
    StopModel.getItem = function(index) { return list[index]; }
    StopModel.addItem = function(item) { list.push(item); }
    StopModel.removeItem = function(item) { list.splice(list.indexOf(item), 1) }
    StopModel.size = function() { return list.length; }
    return StopModel;
});