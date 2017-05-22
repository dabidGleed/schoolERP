angular.module('school_erp')
.controller("loginController",['$http','$scope','$rootScope', function($http, $scope, $rootScope){
        // $scope.employeeData = [];
        // employeeServices.getEmployee()
        // .success(function(data, status){
        //     $scope.employeeData = data.employee;
        // })
        // .error(function(data,success){
        // })
        $rootScope.loginPage = true;
        console.log("temp")
        $("body.hold-transition").addClass('login-page');
}])

