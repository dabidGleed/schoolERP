angular.module('school_erp').config(function($stateProvider, $urlRouterProvider, $locationProvider) { 
    $stateProvider
        .state('dashboard', { // login Page
            url: "/dashboard",
            templateUrl: "app/components/dashboard/dashboard.html"          
        });
        $urlRouterProvider.otherwise("/dashboard");
});