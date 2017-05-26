angular.module('school_erp')
.factory('BusRouteServices',['$http', 'globalServices', function($http, globalServices){
    var BusRouteServices = {};

    BusRouteServices.getBusRoute = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/bus_route/SCH-9271'
                })
    };

     BusRouteServices.setBusRoute = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/bus_route/SCH-9271',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

   BusRouteServices.EditBusRoute = function(dataValue){
            console.log(dataValue);
            return $http({
                        method: 'EDIT',
                        url: globalServices.globalValue.baseURL + '/book_edit/:book_id/:name/:value',
                        data: $.param(dataValue),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    })
        };

       return BusRouteServices;
    }]);  