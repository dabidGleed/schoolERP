angular.module('school_erp')
.controller("employeeDetailsController",['$http','$scope','employeeServices','ngDialog', function($http, $scope, employeeServices, ngDialog){
        $scope.employeeDetailsData = [];
        $scope.data = [];
        $scope.today1 = '01/01/1975';            
        $scope.addEmployee = function(data){
             var empDetails = {
                first_name: $scope.data.first_name,
                last_name: $scope.data.last_name,
                dob: $scope.data.dob,
                job_category: $scope.data.job_category,
                experience: $scope.data.experience,
                phone:$scope.data.phone,
                email:$scope.data.email,
                profile_image:"imageData",
                website:$scope.data.website,
                joined_on:$scope.data.joined_on,
                gender:$scope.data.gender,
                experience:$scope.data.experience,
                website:$scope.data.website,
                qualification:$scope.data.qualification
             }
            employeeServices.setEmployee(empDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Employeee Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
            })
            .error(function(data,success){
                 ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
        }
      

}])