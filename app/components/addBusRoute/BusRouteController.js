angular.module('school_erp')
.controller("BusRouteController", ['$http','$scope','BusRouteServices','ngDialog','addStationServices','globalServices', function($http, $scope, BusRouteServices, ngDialog, addStationServices, globalServices){
        $scope.data = [];
        $scope.getBusRoute = function(){
        BusRouteServices.getBusRoute()
        .success(function(data, status){
            $scope.busRoutes = data.bus_routes;
            $scope.routeId = $scope.busRoutes[0].route_id;
        })
        .error(function(data,success){
        })
        }   
    
       
        addStationServices.getStation()
        .success(function(data, status){
            $scope.stations = data.stations;
             $scope.stationId = $scope.stations[0].station_id;
        })
        .error(function(data,success){
        });
        
    
       $scope.addBusRoute = function(data){
                var StationDetails = {
                    route_title:$scope.data.route_title,
                    vehicle_code:$scope.data.vehicle_code, 
                    station:$scope.data.station ,
                    pickup_time:$scope.data.pickup_time,
                    drop_time:$scope.data.drop_time 
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
                template: '<p>Routes are Edited Successfully.</p>',
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

          $scope.addTime = function(data){
                var TimeDetails = {
                   pickup_time:$scope.data.pickup_time ,
                   dropping_time:$scope.data.dropping_time
            }
            BusRouteServices.setTime(TimeDetails, $scope.routeId, $scope.stationId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p> BusRoutes are Added Successfully.</p>',
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

              $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        } 

         $scope.getBusRoute();
}])

