angular.module('school_erp')
.controller("classWiseController",['$http','$scope', function($http, $scope){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.data = data.employee;
        })
        .error(function(data,success){
        })

}])

