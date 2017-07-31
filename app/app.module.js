
angular.module('school_erp', ['ui.router','720kb.datepicker', 'ngDialog'])
.run(function ($rootScope, $state, authService) {
    $rootScope.loginPage = false;
    $rootScope.role = 'teacher';
    $rootScope.firstReload = false;
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    console.log("Change view sfsf");

   
    
    var requireLogin = toState.data.requireLogin;
    if (requireLogin && authService.getUserInfo() == null) {
      $rootScope.authenticated = false;
      event.preventDefault();
      return $state.go("login");
    }

  });

 
})

