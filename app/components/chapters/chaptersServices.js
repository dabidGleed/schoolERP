angular.module('school_erp')
.factory('subjectsServices',['$http', 'globalServices', function($http, globalServices){
    var subjectsServices = {};

    subjectsServices.getSubjects = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1'
                })
    };

     subjectsServices.setSubjects = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return subjectsServices;
    }]);  