angular.module('school_erp')
.factory('studentServices',['$http', 'globalServices', function($http, globalServices){
    var studentServices = {};

    studentServices.getStudent = function(classValue){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/students/'+classValue
                })
    };

     studentServices.setStudent = function(dataValue, classToAdd){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/students/'+classToAdd,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

       studentServices.getClass = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/school_classes/SCH-9271'
                })
    };
      studentServices.setParent = function(parentDetails,studentId){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/add_parent/'+studentId,
                    data: $.param(parentDetails),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

       studentServices.setStudentaddress = function(Studentaddress,studentId){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/add_parent/'+studentId,
                    data: $.param(Studentaddress),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
      return studentServices;

}]);