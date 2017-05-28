angular.module('school_erp')
.controller("employeeAttendanceController",['$http','$scope','employeeServices', function($http, $scope, employeeServices){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })

        
        $scope.addAttendance = function(data){
             var stdAdmission = {
                session:$scope.data.session,
                status:$scope.data.status 
    
             }
           
            employeeServices.setAttendance(ASttendance, $scope.classId)   
            .success(function(data, status){
                
                ngDialog.open({
                template: '<p> Employee Information  submitted successfully </p>',
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

