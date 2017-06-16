angular.module('school_erp')
.controller("chaptersController",['$http','$scope','chaptersServices','globalServices','subjectsServices','ngDialog', function($http, $scope, chaptersServices, globalServices, subjectsServices, ngDialog){
        $scope.chapterData = [];
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

        // Role based Display
        $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
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

       

         $scope.getChapters = function(subId){
            chaptersServices.getChapters(subId)
            .success(function(data, status){
                console.log(subId)
                $scope.chaptersData = data[subId+""];

            })
            .error(function(data,success){
            });
        }


            $scope.addChapters= function(data){
             var chapterDetails = {
                    title:$scope.data.title,
                    code:$scope.data.code,
                    no_of_topics:$scope.data.no_of_topics,
                    description:$scope.data.description
             }
            chaptersServices.setChapters(chapterDetails, $scope.subId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Chapters are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getChapters($scope.subId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

          
}])

