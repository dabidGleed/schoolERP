angular.module('school_erp')
.controller("addStationController",['$http','$scope', function($http, $scope){
        $scope.addStation = [];
        employeeServices.getaddStation()
        .success(function(data, status){
            $scope.addStation = data.stations;
        })
        .error(function(data,success){
        })
}])

