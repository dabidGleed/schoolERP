angular.module('school_erp')
.factory('globalServices',['$http','$rootScope', function($http, $rootScope){
    var globalServices = {};
    globalServices.globalValue = {
        baseURL: 'http://ec2-52-40-213-254.us-west-2.compute.amazonaws.com:4005/',
        schoolID: '',
        role:'teacher'
    };

    globalServices.fetchRoleAuth = function(roles){
        var i = 0;
        var retVal;
        while(i <= roles.length){
             if(roles[i] == $rootScope.role){
                retVal = true;
                break;
            }else{
                retVal = false;
            }
            i++;
        }
        return retVal;
    }

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