angular.module('school_erp')
.factory('authService',['$http', 'globalServices', function($http, globalServices){
    var authService = {};


     authService.login = function(dataValue){
        
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'signin',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
                .then(function(result) {
                    userInfo = {
                        role: result.data.role,
                        userId: result.data.uniqueId,
                        accessToken: result.data.token                    
                    };
                    deferred.resolve(userInfo);
                }, function(error) {
                    deferred.reject(error);
                });
                    return deferred.promise;
                };

      authService.logout = function() {
            var deferred = $q.defer();
            $window.localStorage["userInfo"] = null;
            $window.localStorage["role"] = null;           
            return deferred.promise;
        };
     
      return authService;

}]);