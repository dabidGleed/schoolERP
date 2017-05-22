angular.module('school_erp')
.controller("loginController",['$http','$scope','$rootScope','authService','$state','ngDialog', function($http, $scope, $rootScope, authService, $state, ngDialog){
        $scope.datab = [];
       
        $scope.login = function(data){
                 var dataValue = {
                email: $scope.datab.username,
                password: $scope.datab.password
                };
                authService.login(dataValue)
                .success(function(data, status){                        
                        if(status != 401){
                                $rootScope.loginPage = false;
                                $state.go('main.dashboard');
                        }else{
                            ngDialog.open({
                                template: '<p>'+ data +'</p>',
                                plain: true
                            });    
                        }
                })
                .error(function(data,success){
                })
        };        
        $rootScope.loginPage = true;
}])

