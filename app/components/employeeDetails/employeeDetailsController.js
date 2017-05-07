angular.module('school_erp')
.controller("employeeDetailsController",['$http','$scope','employeeServices', function($http, $scope, employeeServices){
        $scope.employeeDetailsData = [];
        $scope.data = [];
        $scope.today1 = '01/01/1975';
        $scope.addEmployee = function(data){
             var empDetails = {
                name: $scope.data.name,
                surname: $scope.data.surname,
                dob: $scope.data.dob,
                job_category: $scope.data.job_category,
                experience: $scope.data.experience,
                phone:$scope.data.phone,
                email:$scope.data.email,
                profile_image:"imageData",
                website:$scope.data.website,
                joined_on:$scope.data.joined_on
             }
            employeeServices.setEmployee(empDetails)   
            .success(function(data, status){
               console.log("Data added");
            })
            .error(function(data,success){
                
            })
        }


}])