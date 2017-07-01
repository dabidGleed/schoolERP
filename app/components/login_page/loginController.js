angular.module('school_erp')
    .controller("loginController", ['$http', '$scope', '$rootScope', 'authService', '$state', 'ngDialog', '$window', function($http, $scope, $rootScope, authService, $state, ngDialog, $window) {
        $scope.datab = [];

        $scope.login = function(data) {
            var dataValue = {
                email: $scope.datab.username,
                password: $scope.datab.password
            };
            authService.login(dataValue)
                .success(function(data, status) {
                    $window.localStorage["userInfo"] = JSON.stringify(data);
                    $rootScope.role = data.role;
                    if (status != 401) {
                        $rootScope.loginPage = false;
                        $state.go('main.dashboard');
                    } else {
                        ngDialog.open({
                            template: '<p>' + data + '</p>',
                            plain: true
                        });
                    }
                })
                .error(function(data, success) {})
        };

        $scope.logout = function() {
            authService.logout();
            $state.go('login');
        };

        // $rootScope.loginPage = true;
    }])