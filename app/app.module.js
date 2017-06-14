
angular.module('school_erp', ['ui.router','720kb.datepicker', 'ngDialog'])
.run(function ($rootScope, $state) {
    $rootScope.loginPage = false;
    $rootScope.role = 'admin';
});


