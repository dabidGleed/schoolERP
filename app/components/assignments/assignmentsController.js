angular.module('school_erp')
.controller("assignmentsController",['$http','$scope','globalServices','subjectsServices','assignmentsServices','chaptersServices','ngDialog', function($http, $scope, globalServices, subjectsServices, assignmentsServices, chaptersServices, ngDialog){
        $scope.assignmentsData = [];
       
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
              
                $scope.populateSubject($scope.secId)
            })
            .error(function(data,success){
            })
        }

           $scope.populateSubject = function(secId){
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
                $scope.chapterId = $scope.chapterData[0].lesson_id;
                $scope.getAssignments();
            })
            .error(function(data,success){
            });
        }
       

          $scope.getAssignments = function(){
            assignmentsServices.getAssignments( $scope.chapterId,$scope.secId)
            .success(function(data, status){
        
                $scope.assignmentsData = data.assignments;

            })
            .error(function(data,success){
            });
        }
       

            $scope.addAssignments= function(data){
             var assignDetails = {
                 assignment_title: $scope.data.assignment_title ,
                 due_date:$scope.data.due_date ,
                 description:$scope.data.description
             }
            assignmentsServices.setAssignments(assignDetails,  $scope.secId, $scope.chapterId)   
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

