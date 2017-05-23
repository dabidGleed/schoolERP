angular.module('school_erp')
.controller("addBusRouteController"['$http','$scope', function($http, $scope){
        $scope.addBusRoute = [];
        employeeServices.getaddBusRoute()
        .success(function(data, status){
            $scope.addBusRoute = data.busRoute;
        })
        .error(function(data,success){
        })
}])

