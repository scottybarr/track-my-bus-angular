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
    $scope.buses = [
        {
            serviceNumber: 10,
            services: [
                {
                    mins: 15,
                    destination: 'Elm Row'
                },
                {
                    mins: 25,
                    destination: 'Western Harbour'
                }
            ]
        },
        {
            serviceNumber: 27,
            services: [
                {
                    mins: 6,
                    destination: 'Silverknowes'
                },
                {
                    mins: 55,
                    time: '18:30',
                    destination: 'Silverknowes'
                }
            ]

        }
    ];
    var spanWidth = parseInt(12 / $scope.buses.length);
    $scope.spanWidth = spanWidth < 3 ? 3 : spanWidth;

}