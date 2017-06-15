angular.module('school_erp')
.factory('addBookServices',['$http', 'globalServices', function($http, globalServices){
    var addBookServices = {};

    addBookServices.getBook = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/book/SCH-9271'

                })
    };
    addBookServices.setBook = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/book/SCH-9271',

                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
    };
    
     addBookServices.EditBook = function(dataValue){
            console.log(dataValue);
            return $http({
                        method: 'EDIT',
                        url: globalServices.globalValue.baseURL + 'book_edit/:book_id/:name/:value',
                        data: $.param(dataValue),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    })
        };
       return addBookServices;
    }]);  