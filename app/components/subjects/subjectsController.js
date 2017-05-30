angular.module('school_erp')
.controller("subjectsController",['$http','$scope','subjectsServices','ngDialog','globalServices', function($http, $scope, subjectsServices, ngDialog, globalServices){
        $scope.subjectsData = [];    

        globalServices.getClass()
        .success(function(data, status){
            $scope.classData = data.school_classes;// Api list-name
            $scope.classId = $scope.classData[0].class_id;
            $scope.populateSections($scope.classId)
            
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
            })
            .error(function(data,success){
            });
        }

         $scope.addSubjects = function(data){
             var Subjects = {
               _id:"",
               subject_id: $scope.data.subject_id,
               class_id: "",
               name:$scope.data.name 
             }
            subjectsServices.setSubjects(Subjects, $scope.secId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Subjects are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getSubjects($scope.secId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        };

       // $scope.getSubjects();
}])

