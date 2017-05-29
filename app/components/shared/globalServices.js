angular.module('school_erp')
.factory('globalServices',['$http', function($http){
    var globalServices = {};
    globalServices.globalValue = {
        baseURL: 'http://ec2-52-40-213-254.us-west-2.compute.amazonaws.com:4005/',
        schoolID: ''
    };

    globalServices.getClass = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/school_classes/SCH-9271'
                })
    };
    globalServices.getSections = function(classID){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/class_sections/'+classID
                })
    };
     globalServices.getBusRoutes = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + '/api/bus_route/SCH-9271'
                })
    };
    return globalServices;
}]);