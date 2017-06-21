angular.module('school_erp')
.controller("addVehicleController",['$http','$scope','addVehicleServices','ngDialog', function($http, $scope, addVehicleServices, ngDialog){
        $scope.vehicles = [];
        $scope.data = [];
        $scope.getVehicle = function(){
        addVehicleServices.getVehicle()
        .success(function(data, status){
            $scope.vehicles = data.vehicles;
        })
        .error(function(data,success){
        });
    }

           $scope.addVehicle= function(data){
            var VehicleDetails ={
                vehicle_code:$scope.data.vehicle_code,
                vehicle_name:$scope.data.vehicle_name,
            }
            addVehicleServices.setVehicle(VehicleDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Vehicle is Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getVehicle();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
        $scope.getVehicle();
}]);   