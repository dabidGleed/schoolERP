angular.module('school_erp')
.controller("addBusRouteController"['$http','$scope','addStationServices', function($http, $scope, addStationServices){
        $scope.addBusRoute = [];
        employeeServices.getBusRoute()
        .success(function(data, status){
            $scope.data = data.busRoute;
        })
        .error(function(data,success){
        })


               $scope.addBusRoute= function(data){
                var StationDetails = {
                    station_id:$scope.data.station_id,
                    pickup_time:$scope.data.pickup_time,
                    droping_time:$scope.data.droping_time,
                    route_id:$scope.data.route_id
            }
            chaptersServices.setBusRoute(StationDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Stations are Added Successfully.</p>',
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

           $scope.EditBusRoute= function(editdata){
             var StationDetails = {
                title:$scope.editdata.title,
                code:$scope.editdata.code,
                no_of_topics:$scope.editdata.no_of_topics,
                description:$scope.editdata.description
             }
            addStationServices.EditBusRoute(bookDetails)   
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

