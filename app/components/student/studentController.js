angular.module('school_erp')
.controller("studentController",['$http','$scope', 'studentServices', 'globalServices', function($http, $scope, studentServices, globalServices){
        $scope.studentData = [];
        

        globalServices.getClass()
        .success(function(data, status){
            $scope.classData = data.school_classes;// Api list-name
            $scope.classId = $scope.classData[0].class_id;
            $scope.populateSections($scope.classId)
            
        })
        .error(function(data,success){
        })

         $scope.populateSections = function(classId){
            globalServices.getSections(classId)
            .success(function(data, status){
                $scope.secData = data.class_sections;// Api list-name
                $scope.secId = $scope.secData[0].section_id;
                $scope.getStudentValue($scope.secId);
            })
            .error(function(data,success){
            })
        }
        
         globalServices.getBusRoutes()
        .success(function(data, status){
            $scope.routes = data.bus_routes;// Api list-name           
        })
        .error(function(data,success){
        })



       
        

        $scope.getStudentValue = function(secValue){                       
            studentServices.getStudent(secValue)
            .success(function(data, status){
                $scope.studentData = data.students;
            })
            .error(function(data,success){
            })
        }

            $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        }
}])

