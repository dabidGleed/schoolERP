angular.module('school_erp')
.controller("subjectsController",['$http','$scope','subjectsServices','ngDialog', function($http, $scope, subjectsServices, ngDialog){
        $scope.subjectsData = [];        
        $scope.getSubjects = function(){
        subjectsServices.getSubjects()
        .success(function(data, status){
            $scope.subjectsData = data.subjects;
        })
        .error(function(data,success){
        });
}

         $scope.addSubjects = function(data){
             var Subjects = {
               _id:"",
               subject_id: $scope.data.subject_id,
               class_id: "",
               name:$scope.data.name 
             }
            subjectsServices.setSubjects(Subjects)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Subjects are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getSubjects();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        };

        $scope.getSubjects();
}])

