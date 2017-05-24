angular.module('school_erp')
.factory('addBookServices',['$http', 'globalServices', function($http, globalServices){
    var addBookServices = {};

    addBookServices.getBook = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + '/api/book/'
                })
    };

     addBookServices.setBook = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + '/api/book/',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

       return addBookServices;
    }]);  