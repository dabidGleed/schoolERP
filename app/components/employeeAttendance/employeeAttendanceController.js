angular.module('school_erp')
.controller("employeeAttendanceController",['$http','$scope', function($http, $scope){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })
}])

