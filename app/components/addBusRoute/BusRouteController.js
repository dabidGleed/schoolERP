angular.module('school_erp')
.controller("BusRouteController"['$http','$scope','BusRouteServices','ngDialog', function($http, $scope, BusRouteServices, ngDialog){
        $scope.busRoutes = [];

        console.log("Happy me");

        BusRouteServices.getBusRoute()
        .success(function(data, status){
            $scope.busRoutes = data.bus_routes;
        })
        .error(function(data,success){
        })
    
    
       $scope.addBusRoute= function(data){
                var StationDetails = {
                    route_title:$scope.data.route_title,
                    vehicle_code:$scope.data.vehicle_code, 
                    vehicle_number:$scope.data.vehicle_number
            }
            BusRouteServices.setBusRoute(StationDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Stations are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getBusRoute();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

           $scope.EditBusRoute= function(editdata){
             var StationDetails = {
                route_title:$scope.data.route_title,
                vehicle_code:$scope.data.vehicle_code, 
                vehicle_number:$scope.data.vehicle_number
             }
            BusRouteServices.EditBusRoute(StationDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>BusRoutes are Edited Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getBusRoute();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
}])

