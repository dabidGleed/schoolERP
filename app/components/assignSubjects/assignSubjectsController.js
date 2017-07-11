angular.module('school_erp')
.controller("assignSbjectsController",['$http','$scope', 'assignServices', 'ngDialog','globalServices','subjectsServices','employeeServices', function($http, $scope, assignServices, ngDialog, globalServices, subjectsServices, employeeServices){
        $scope.employeeData = [];
        $scope.data = {};
        $scope.teachId = '';
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

        $scope.getSubName = function(subid){
            console.log(subid);
            $scope.employeeData.forEach(function(ele){
                if(ele.subject_id == subid){
                    return ele.name;
                }
            });
        };
        
        employeeServices.getEmployee()
        .success(function(data, status){
              console.log(data);
        $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })

          $scope.addTeacher = function(data){
            
             var someVal = JSON.parse($scope.data.subjectObj);
        
             var teacherDetails = {
                  subject_id: someVal.subject_id,
                  subject_name: someVal.name
             }

             console.log(teacherDetails)
            assignServices.setTeacher(teacherDetails, $scope.data.teachId)
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamPapers are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
               // $scope.getTeacher( $scope.teacherId);
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
        $scope.getSubjects();
}])

