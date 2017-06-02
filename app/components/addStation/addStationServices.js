
angular.module('school_erp')
.factory('addStationServices',['$http', 'globalServices', function($http, globalServices){
    var addStationServices = {};

    addStationServices.getStation = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/transport_stations/SCH-9271'
                })
    };

     addStationServices.setStation = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/transport_stations/SCH-9271',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

    addStationServices.EditStation = function(dataValue){
            console.log(dataValue);
            return $http({
                        method: 'EDIT',
                        url: globalServices.globalValue.baseURL + '',
                        data: $.param(dataValue),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    })
        };

       return addStationServices;
    }]);  