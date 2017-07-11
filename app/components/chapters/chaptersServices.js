angular.module('school_erp')
.factory('chaptersServices',['$http', 'globalServices', function($http, globalServices){
    var chaptersServices = {};

    chaptersServices.getChapters = function(subjectId){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/course_works/'+subjectId
                })
    };

     chaptersServices.setChapters = function(dataValue,subjectId){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/course_works/'+subjectId,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return chaptersServices;
    }]);  