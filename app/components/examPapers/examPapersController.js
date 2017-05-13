angular.module('school_erp')
.controller("examPapersController",['$http','$scope','examServices' , function($http, $scope, examServices){
        $scope.examData = [];
        examServices.getExamPapers()
        .success(function(data, status){
            $scope.examData = data['SCH-9271-EXM_SCH-39-SCH-9271-CL-11-SUB-3'];

        })
        .error(function(data,success){
        })
}])


