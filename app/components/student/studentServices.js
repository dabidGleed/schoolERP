angular.module('school_erp')
.factory('studentServices',['$http', 'globalServices', function($http, globalServices){
    var studentServices = {};

    studentServices.getStudent = function(classSecValue){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/students/'+classSecValue
                })
    };


     studentServices.setStudent = function(dataValue, classSecToAdd){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/students/'+classSecToAdd,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
                })
      };

     
    //   studentServices.setParent = function(parentDetails,studentId){       
    //     return $http({
    //                 method: 'POST',
    //                 url: globalServices.globalValue.baseURL + 'api/add_parent/'+studentId,
    //                 data: $.param(parentDetails),
    //                 headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    //             })
    //   };

    //    studentServices.setStudentaddress = function(Studentaddress,studentId){       
    //     return $http({
    //                 method: 'POST',
    //                 url: globalServices.globalValue.baseURL + 'api/add_parent/'+studentId,
    //                 data: $.param(Studentaddress),
    //                 headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    //             })
    //   };
      return studentServices;

}]);