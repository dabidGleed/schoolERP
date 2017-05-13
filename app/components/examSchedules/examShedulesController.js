angular.module('school_erp')
.controller("examSchedulesController",['$http','$scope','examServices','ngDialog', function($http, $scope, examServices,ngDialog){
        $scope.examData = [];
          $scope.today1 = '01/01/1975';

        $scope.getExamScheduleData = function(){
             examServices.getExamSchedule()
            .success(function(data, status){
                $scope.examData = data.exam_schedules;
            })
            .error(function(data,success){
            })
        }
       
         $scope.addExamSchedule = function(data){
             var examDetails = {
                exam_title: $scope.data.exam_title,
                exam_classes: $scope.data.exam_classes,
                from_date: $scope.data.from_date
             }
            examServices.setExamSchedule(examDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamSchedules are Added Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getExamScheduleData();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
        $scope.EditExamSchedule = function(value){
        $scope.editdata = $scope.examData[value];
    }
    
      $scope.EditExamSchedule = function(editdata){
             var examDetails = {
                exam_title: $scope.editdata.exam_title,
                exam_classes: $scope.editdata.exam_classes,
                from_date: $scope.editdata.from_date
             }
            examServices.EditExamSchedule(examDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamSchedules are Edited Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getExamScheduleData();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
        $scope.getExamScheduleData();

}])

