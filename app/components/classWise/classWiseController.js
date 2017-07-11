angular.module('school_erp')
.controller("classWiseController",['$http','$scope','globalServices','subjectsServices', function($http, $scope,globalServices, subjectsServices){
         $scope.data = [];
         globalServices.getClass()
        .success(function(data, status){
            $scope.classData = data.school_classes;// Api list-name
            $scope.classId = $scope.classData[0].class_id;
            $scope.populateSections($scope.classId)
            
        })
        .error(function(data,success){
        })

         $scope.populateSections = function(classId){
             $scope.secId =[]; 
            globalServices.getSections(classId)
            .success(function(data, status){
                $scope.secData = data.class_sections;// Api list-name
                $scope.secId = $scope.secData[0].section_id;
                $scope.populateSubjects($scope.secId);
                
            })
            .error(function(data,success){
                
                $scope.populateSubjects($scope.secId);
            })
        } 

          $scope.populateSubjects = function(secId){
            $scope.subData = [];
            subjectsServices.getSubjects(secId)
            .success(function(data, status){
                $scope.subData = data.subjects;
                $scope.subId = $scope.subData[0].subject_id;
                $scope.getChapters($scope.subId);
            })
            .error(function(data,success){
            });
        }

          $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        } 

}])

