angular.module('school_erp')
.factory('examServices',['$http', 'globalServices', function($http, globalServices){
    var examServices = {};

    examServices.getExamSchedule = function(){
        return $http({
            method: 'GET',
            url: globalServices.globalValue.baseURL + 'api/exam_schedule/SCH-9271'
        })
    };

     examServices.setExamSchedule = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/exam_schedule/SCH-9271',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
        examServices.getExamPapers = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/exams/SCH-9271-CL-11-SUB-3/SCH-9271-EXM_SCH-39'
                })
    };
     examServices.setExamPapers = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/exams/SCH-9271-CL-11-SUB-3/SCH-9271-EXM_SCH-39',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

        examServices.EditExamSchedule = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'EDIT',
                    url: globalServices.globalValue.baseURL + 'api/edit_exam_schedule/SCH-9271-EXM_SCH-39',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

      return examServices;

}]);