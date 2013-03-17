'use strict';

function BusStopController($scope, StopModel) {
    $scope.stopModel = StopModel
    $scope.stopModel.stopName = "Princes Street";
    $scope.stopModel.stopCode = 123456;
};

function BusServiceController($scope, $routeParams, $http, StopModel) {
    $http.get('/api/' + STOP_CODE).success(function(data) {
        var spanWidth = parseInt(12 / data.services.length);
        $scope.spanWidth = spanWidth < 3 ? 3 : spanWidth;
        $scope.stopModel = StopModel
        $scope.stopModel.buses = data.services
        $scope.stopModel.stopName = data.stop_info.stop_name
        $scope.stopModel.stopCode = data.stop_info.stop_code
    });
};
