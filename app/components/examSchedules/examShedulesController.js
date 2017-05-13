angular.module('school_erp')
.controller("examSchedulesController",['$http','$scope','examServices', function($http, $scope, examServices){
        $scope.examData = [];
        examServices.getExamSchedule()
        .success(function(data, status){
            $scope.examData = data.exam_schedules;
        })
        .error(function(data,success){
        })
         $scope.addExamSchedule = function(data){
             var examDetails = {
                exam_title: $scope.data.exam_title,
                exam_classes: $scope.data.exam_classes,
                from_date: $scope.data.from_date
             }
            examServices.setExamSchedule(examDetails)   
            .success(function(data, status){
               console.log("Data added");
            })
            .error(function(data,success){
                
            })
        }

}])

