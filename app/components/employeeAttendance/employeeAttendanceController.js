angular.module('school_erp')
.controller("employeeAttendanceController",['$http','$scope','employeeServices','ngDialog', function($http, $scope, employeeServices, ngDialog){
        $scope.employeeData = [];

        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })
  
        $scope.addAttendance = function(employee, status){
             var Attendance = {                                                      
                session:"morning",
                status: status

             }
            employeeServices.setAttendance(Attendance, employee.employee_id)   
            .success(function(data, status){
                
                ngDialog.open({
                template: '<p> Employee Attendance  submitted successfully </p>',
                plain: true
                });
                $scope.data = [];
                
            })
            .error(function(data,success){
                 ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
        }
}])

