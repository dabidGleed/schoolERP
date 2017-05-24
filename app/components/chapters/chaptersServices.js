angular.module('school_erp')
.factory('chaptersServices',['$http', 'globalServices', function($http, globalServices){
    var chaptersServices = {};

    chaptersServices.getChapters = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1'
                })
    };

     chaptersServices.setChapters = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return chaptersServices;
    }]);  