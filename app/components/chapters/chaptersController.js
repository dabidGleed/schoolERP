angular.module('school_erp')
.controller("chaptersController",['$http','$scope','chaptersServices', function($http, $scope, chaptersServices){
        $scope.chapterData = [1,2,3];
         $scope.editdata = [];
     
            $scope.addChapters= function(data){
             var chapterDetails = {
                    title:$scope.editdata.title,
                    code:$scope.editdata.code,
                    no_of_topics:$scope.editdata.no_of_topics,
                    description:$scope.editdata.description
             }
            chaptersServices.setChapters(chapterDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Chapters are Added Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getChapters();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

           $scope.EditChapters = function(editdata){
             var chapterDetails = {
                title:$scope.editdata.title,
                code:$scope.editdata.code,
                no_of_topics:$scope.editdata.no_of_topics,
                description:$scope.editdata.description
             }
            examServices.EditChapters(bookDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamSchedules are Edited Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getChapters();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
}])

