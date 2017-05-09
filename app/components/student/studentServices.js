angular.module('school_erp')
.factory('studentServices',['$http', 'globalServices', function($http, globalServices){
    var studentServices = {};

    studentServices.getStudent = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + ''
                })
    };

     studentServices.setStudent = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + '',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

      return studentServices;

}]);