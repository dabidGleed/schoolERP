angular.module('school_erp')
.factory('employeeServices',['$http', 'globalServices', function($http, globalServices){
    var employeeService = {};

    employeeService.getEmployee = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/employee/SCH-9271'
                })
    };

     employeeService.setEmployee = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/employee/SCH-9271',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

      return employeeService;

}]);