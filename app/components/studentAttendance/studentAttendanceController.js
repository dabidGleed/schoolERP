angular.module('school_erp')
.controller("studentAttendanceController",['$http','$scope','studentServices', function($http, $scope, studentServices){
        $scope.studentData = [];
        studentServices.getAttendance()
        .success(function(data, status){
            $scope.studentData = data.attendance;
        })
        .error(function(data,success){
        })



        
        $scope.addAttendance = function(data){
             var stdAdmission = {
                class_id: $scope.data.class_id,
                section_id: $scope.data.section_id,
                session: $scope.data.session,
                status:  $scope.data.status
    
             }
           
            studentServices.setAttendance(ASttendance, $scope.classId)   
            .success(function(data, status){
                
                ngDialog.open({
                template: '<p> Student Information  submitted successfully </p>',
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

