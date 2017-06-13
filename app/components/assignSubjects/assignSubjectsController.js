angular.module('school_erp')
.controller("assignSbjectsController",['$http','$scope', 'globalServices','subjectsServices','employeeServices', function($http, $scope, globalServices, subjectsServices, employeeServices){
        $scope.employeeData = [];
        // employeeServices.getEmployee()
        // .success(function(data, status){
        //     $scope.employeeData = data.employee;
        // })
        // .error(function(data,success){
        // })

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
                $scope.getSubjects($scope.secId);     
            })
            .error(function(data,success){
            })
        }

             $scope.getSubjects = function(secId){
                subjectsServices.getSubjects(secId)
                .success(function(data, status){
                    $scope.subjectsData = data.subjects;
                    $scope.subjectId = $scope.subjectsData[0].subject_id;
        
            })
            .error(function(data,success){
            });
        }

        
        employeeServices.getEmployee()
        .success(function(data, status){
        $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })

          $scope.addTeacher = function(data){
             var teacherDetails = {
                  subject_id:$scope.data.subject_id ,
                  subject_name:$scope.data.subject_name 
             }
            assignServices.setTeacher(teacherDetails,  $scope.teacherId )   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamPapers are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getTeacher( $scope.teacherId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
        
          $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        }
}])

