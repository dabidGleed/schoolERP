angular.module('school_erp')
.factory('subjectsServices',['$http', 'globalServices', function($http, globalServices){
    var subjectsServices = {};

    subjectsServices.getSubjects = function(secID){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/subjects/'+secID
                })
    };

     subjectsServices.setSubjects = function(dataValue, secID){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/subjects/' + secID,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
       return subjectsServices;
    }]);  