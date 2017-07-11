angular.module('school_erp')
.factory('authService',['$http', 'globalServices','$q', '$window','$rootScope', function($http, globalServices, $q, $window, $rootScope){
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
           // var deferred = $q.defer();
            $window.localStorage["userInfo"] = null;
            $window.localStorage["role"] = null;           
          //  return deferred.promise;
        };

         authService.getUserInfo = function() {
             var userInfo;
           if ($window.localStorage["userInfo"]) {
            userInfo = JSON.parse($window.localStorage["userInfo"]);
            if(userInfo != null){
              $rootScope.role = userInfo.role;
            }else{
                $rootScope.role = '';
              $window.localStorage["userInfo"] = null;
          }
        }
            return userInfo;
        };
     
      return authService;

}]);