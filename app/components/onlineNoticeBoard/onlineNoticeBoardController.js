angular.module('school_erp')
.controller("onlineNoticeBoardController",['$http','$scope', function($http, $scope){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })
}])

