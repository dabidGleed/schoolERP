angular.module('school_erp')
.controller("addStationController",['$http','$scope','addStationServices', function($http, $scope, addStationServices){
        $scope.addStation = [];
        addStationServices.getStation()
        .success(function(data, status){
            $scope.data = data.stations;
        })
        .error(function(data,success){
        })

            $scope.addStation= function(data){
            var StationDetails = {
                title:$scope.data.title,
                code:$scope.data.code,
                no_of_topics:$scope.data.no_of_topics,
                description:$scope.data.description
            }
            chaptersServices.setStation(StationDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Stations are Added Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
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
                title:$scope.editdata.title,
                code:$scope.editdata.code,
                no_of_topics:$scope.editdata.no_of_topics,
                description:$scope.editdata.description
             }
            addStationServices.EditStation(bookDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamSchedules are Edited Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getStation();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
}])

