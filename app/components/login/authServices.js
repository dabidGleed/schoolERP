angular.module('school_erp')
.factory('authService',['$http', 'globalServices','$q', function($http, globalServices, $q){
    var authService = {};


     authService.login = function(dataValue){
        
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'signin',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
                
        };

      authService.logout = function() {
            var deferred = $q.defer();
            $window.localStorage["userInfo"] = null;
            $window.localStorage["role"] = null;           
            return deferred.promise;
        };
     
      return authService;

}]);