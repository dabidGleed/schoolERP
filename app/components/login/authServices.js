angular.module('school_erp')
.factory('authService',['$http', 'globalServices', function($http, globalServices){
    var authService = {};

    authService.getExamSchedule = function(){
        return $http({
            method: 'GET',
            url: globalServices.globalValue.baseURL + 'signin'
        })
    };

     authService.login = function(dataValue){
        
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'signin',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
     
      return authService;

}]);