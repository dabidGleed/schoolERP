angular.module('school_erp')
.factory('assignServices',['$http', 'globalServices', function($http, globalServices){
    var assignServices = {};

     assignServices.setTeacher = function(dataValue,teacherId){
         console.log(dataValue,teacherId);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + 'api/add_subjects_to_teacher/'+teacherId,
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };
      return assignServices;
}])