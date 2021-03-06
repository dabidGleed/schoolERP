angular.module('school_erp')
.controller("assignmentsController",['$http','$scope','globalServices','subjectsServices','assignmentsServices','chaptersServices','ngDialog', function($http, $scope, globalServices, subjectsServices, assignmentsServices, chaptersServices, ngDialog){
            $scope.data = [];
            $scope.chapterId = '';
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
                $scope.populateChapters($scope.subId);
            })
            .error(function(data,success){
            });
        }

            $scope.populateChapters = function(subId){
            chaptersServices.getChapters(subId)
            .success(function(data, status){
                console.log(subId)
                $scope.chapterData = data[subId+""];      
                $scope.chapterId =  $scope.chapterData[0].chapter_name     
                $scope.getAssignments($scope.chapterId);
            })
            .error(function(data,success){
            });
        }
       

          $scope.getAssignments = function(chapterId){
              console.log($scope.chapterId);
            assignmentsServices.getAssignments($scope.chapterId,$scope.secId)
            .success(function(data, status){
                console.log(status);
                $scope.assignmentsData = data.assignments;

            })
            .error(function(data,success){
            });
        }
       

            $scope.addAssignments= function(data){
                console.log($scope.chapterId+"lesson");
             var assignDetails = {
                 assignment_title: $scope.data.assignment_title,
                 due_date:$scope.data.due_date ,
                 description:$scope.data.description
             }
            assignmentsServices.setAssignments(assignDetails,$scope.chapterId, $scope.secId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Assignments are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
              $scope.getAssignments();
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

