angular.module('school_erp')
.controller("employeeController",['$http','$scope','employeeServices', function($http, $scope, employeeServices){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })

    $scope.open = function () {

       
    }; // end of scope.open function
}])

