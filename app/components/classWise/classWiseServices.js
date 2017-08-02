angular.module('school_erp')
.factory('classWiseServices',['$http', 'globalServices', function($http, globalServices){
    var classWiseServices = {};

    classWiseServices.getClasswise = function(sectionId){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + '/api/class_timetable/'+sectionId
                })
    };

     classWiseServices.setChapters = function(dataValue,sectionId){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + '/api/class_timetable/'+sectionId,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return chaptersServices;
    }]);  