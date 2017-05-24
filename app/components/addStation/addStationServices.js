
angular.module('school_erp')
.factory('addStationServices',['$http', 'globalServices', function($http, globalServices){
    var addStationServices = {};

    addStationServices.getStation = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1'
                })
    };

     addStationServices.setStation = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/subjects/SCH-9271-CL-1',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

    addStationServices.EditStation = function(dataValue){
            console.log(dataValue);
            return $http({
                        method: 'EDIT',
                        url: globalServices.globalValue.baseURL + '/book_edit/:book_id/:name/:value',
                        data: $.param(dataValue),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    })
        };

       return addStationServices;
    }]);  