angular.module('school_erp')
.controller("studentAttendanceController",['$http','$scope','studentServices','globalServices','ngDialog', function($http, $scope, studentServices, globalServices, ngDialog){
        $scope.studentData = [];
        $scope.classDatanew = [];

        globalServices.getClass()
        .success(function(data, status){
            $scope.classDatanew = data.school_classes;// Api list-name
            $scope.classId = $scope.classDatanew[0].class_id;
            $scope.populateSections($scope.classId);            
        })
        .error(function(data,success){
        })

         $scope.populateSections = function(classId){
            globalServices.getSections(classId)
            .success(function(data, status){
                $scope.secData = data.class_sections;// Api list-name
                $scope.secId = $scope.secData[0].section_id;
                $scope.getStudents($scope.secId);
            })
            .error(function(data,success){
            })
        }

        $scope.getStudents = function(classSecValue){

            studentServices.getStudents(classSecValue)
            .success(function(data, status){
                $scope.studentData = data.students;
            })
            .error(function(data,success){
            })
        }
        $scope.addAttendance = function(studentVal, status){
             var Attendance = {
                class_id: $scope.classId,
                section_id: $scope.secId,
                session: "morning",
                status: status    
             }
           
            studentServices.setAttendance(Attendance, studentVal.student_id)
            .success(function(data, status){
                
                ngDialog.open({
                template: '<p> Student Attendance  submitted successfully </p>',
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

