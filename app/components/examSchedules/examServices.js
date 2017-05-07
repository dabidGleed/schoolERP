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

      return examServices;

}]);