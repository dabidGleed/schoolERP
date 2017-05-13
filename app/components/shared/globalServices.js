angular.module('school_erp')
.factory('globalServices',['$http', function($http){
    var globalServices = {};

    globalServices.globalValue = {
        baseURL: 'http://ec2-52-40-213-254.us-west-2.compute.amazonaws.com:4005/'
    };

      return globalServices;

}]);