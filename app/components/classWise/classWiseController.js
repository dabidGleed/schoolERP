angular.module('school_erp')
.controller("classWiseController",['$http','$scope','globalServices', function($http, $scope,globalServices){

          $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        } 

}])

