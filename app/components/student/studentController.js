angular.module('school_erp')
.controller("studentController",['$http','$scope', 'studentServices', function($http, $scope, studentServices){
        $scope.studentData = [];
        
        studentServices.getClass()
        .success(function(data, status){
            $scope.classData = data.school_classes;// Api list-name
            $scope.classId = $scope.classData[0].class_id;
            $scope.getStudentValue();
        })
        .error(function(data,success){
        })

        $scope.getStudentValue = function(){                       
            studentServices.getStudent($scope.classId)
            .success(function(data, status){
                $scope.studentData = data.students;
            })
            .error(function(data,success){
            })
        }

}])

