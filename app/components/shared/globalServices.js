angular.module('school_erp')
.factory('globalServices',['$http', function($http){
    var globalServices = {};

    globalServices.globalValue = {
        baseURL: 'http://192.168.1.108:4005/'
    };

      return globalServices;

}]);