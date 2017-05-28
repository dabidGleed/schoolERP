angular.module('school_erp')
.factory('studentServices',['$http', 'globalServices', function($http, globalServices){
    var studentServices = {};

    studentServices.getStudent = function(classValue){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/students/SCH-9271-CL-1-SEC-1'
                })
    };

     studentServices.setStudent = function(dataValue, classToAdd){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/students/SCH-9271-CL-1-SEC-1',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
                })
      };

       studentServices.getClass = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + 'api/school_classes/SCH-9271'
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

    studentServices.setAttendance = function(dataValue, classToAdd){       
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/attendance/GH-83dh/5-2-2017/morning',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
                })
      };

      return studentServices;

}]);