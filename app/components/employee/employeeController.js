angular.module('school_erp')
.controller("employeeController",['$http','$scope','employeeServices', function($http, $scope, employeeServices){
        $scope.employeeData = [];
        $scope.editdata = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })
    $scope.EditEmployee = function(value){
        $scope.editdata = $scope.employeeData[value];
    }
}])

