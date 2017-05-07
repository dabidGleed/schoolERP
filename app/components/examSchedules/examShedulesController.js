angular.module('school_erp')
.controller("examShedulesController",['$http','$scope','examServices', function($http, $scope, examServices){
        $scope.examData = [];
        examServices.getExamSchedule()
        .success(function(data, status){
            $scope.examData = data.exam_schedules;
        })
        .error(function(data,success){
        })
}])

