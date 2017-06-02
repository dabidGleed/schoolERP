angular.module('school_erp')
.factory('assignmentsServices',['$http', 'globalServices', function($http, globalServices){
    var assignmentsServices = {};

    assignmentsServices.getAssignments = function(lessonId, sectionId){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/assignment/'+lessonId +'/'+ sectionId
                })
    };

     assignmentsServices.setAssignments = function(dataValue, lessonId, sectionId){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/assignment/'+lessonId +'/'+ sectionId,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return assignmentsServices;
    }]);  