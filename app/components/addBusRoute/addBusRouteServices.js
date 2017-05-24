angular.module('school_erp')
.factory('addBusRouteServices',['$http', 'globalServices', function($http, globalServices){
    var addBusRouteServices = {};

    addBusRouteServices.getBusRoute = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + '/api/book/'
                })
    };

     addBusRouteServices.setBusRoute = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + '/api/book/',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

   addBusRouteServices.EditBusRoute = function(dataValue){
            console.log(dataValue);
            return $http({
                        method: 'EDIT',
                        url: globalServices.globalValue.baseURL + '/book_edit/:book_id/:name/:value',
                        data: $.param(dataValue),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    })
        };

       return addBusRouteServices;
    }]);  