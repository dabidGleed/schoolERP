angular.module('school_erp')
.controller("studentAdmissionController",['$http','$scope','studentServices', 'ngDialog', function($http, $scope, studentServices, ngDialog){
        $scope.classData = [];
        $scope.data = [];   
        $scope.parent = [];   
        studentServices.getClass()
        .success(function(data, status){
            $scope.classData = data.school_classes;// Api list-name
        })
        .error(function(data,success){
        })

        $scope.addStudent = function(data){
             var stdAdmission = {
                surname: "",
                student_name: $scope.data.student_name,
                student_surname: $scope.data.student_surname,
                section: $scope.data.section,
                gender: $scope.data.gender,
                dob: $scope.data.dob,
                phone:$scope.data.phone,
                email:$scope.data.email,
                category:$scope.data.category,
               admission_date:$scope.data.admission_date,
               academic_year:"2017",
               bus_route_id:""
             }
           
            studentServices.setStudent(stdAdmission, $scope.classId)   
            .success(function(data, status){
                $scope.addParent(data.id);
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

        
        $scope.addParent = function(studentId){
            var parentDetails = {
                parent_name:$scope.parent.parent_name,
                parent_contact:$scope.parent.parent_contact,
                parent_relation:$scope.parent.parent_relation
            }
            
            studentServices.setParent(parentDetails,studentId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p> Parent Added successfully </p>',
                plain: true
                });
                $scope.parent = [];
            })
            .error(function(data,success){
                 ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })

        }
        
      
}])

