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

         $scope.getClasswise = function(secId){
            classWiseServices.getClasswise(secId)
            .success(function(data, status){
                console.log(secId)
                $scope.classData = data[secId+""];

            })
            .error(function(data,success){
            });
        }
            $scope.addClasswise= function(data){
             var classwiseDetails = {
                    day:$scope.data.day,
                    start_time:$scope.data.start_time,
                    end_time:$scope.data.end_time,
                    room_no:$scope.data.room_no,
                    subject_id:$scope.data.subject_id
             }
            chaptersServices.setClasswise(classwiseDetails,$scope.secId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Chapters are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getClasswise($scope.secId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

}])

