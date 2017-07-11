angular.module('school_erp')
.controller("addStationController",['$http','$scope','addStationServices','ngDialog', function($http, $scope, addStationServices, ngDialog){
        $scope.data = [];

        $scope.getStation = function(){
        addStationServices.getStation()
        .success(function(data, status){
            $scope.data = data.stations;
        })
        .error(function(data,success){
        });
        }

            $scope.addStation= function(data){
            var StationDetails ={
                station_name:$scope.data.station_name,
                station_code:$scope.data.station_code,
                station_geo_location:$scope.data.station_geo_location
            }
            addStationServices.setStation(StationDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Station is Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getStation();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

           $scope.EditStation = function(editdata){
             var StationDetails = {
                station_name:$scope.editdata.station_name,
                station_code:$scope.editdata.station_code,
                station_geo_location:$scope.editdata.station_geo_location
             }
            addStationServices.EditStation(bookDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>station is Edited Successfully.</p>',
                plain: true
                });
                $scope.editdata = [];
                $scope.getStation();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

      $scope.getStation();    
}])

