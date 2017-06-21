angular.module('school_erp')
.factory('addVehicleServices',['$http', 'globalServices', function($http, globalServices){
    var addVehicleServices = {};

    addVehicleServices.getVehicle = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/vehicles/SCH-9271'
                })
    };

         addVehicleServices.setVehicle = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/vehicles/SCH-9271',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
      return addVehicleServices;
}])
