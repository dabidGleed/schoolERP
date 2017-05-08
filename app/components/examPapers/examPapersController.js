angular.module('school_erp')
.controller("examPapersController",['$http','$scope','examServices', 'ngDialog' , function($http, $scope, examServices, ngDialog){
        $scope.examData = [];
        $scope.getExamPapers = function(){
             examServices.getExamPapers()
        .success(function(data, status){
            $scope.examData = data['SCH-9271-EXM_SCH-39-SCH-9271-CL-11-SUB-3'];
        })
        .error(function(data,success){
        });
        }
         $scope.addExamPapers = function(data){
             var examDetails = {
               exam_paper_title: $scope.data.exam_paper_title,
               date: $scope.data.date,
               time_from: $scope.data.time_from,
               time_to:$scope.data.time_to
             }
            examServices.setExamPapers(examDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamPapers are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getExamPapers();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

        $scope.getExamPapers();
       
       
}])


