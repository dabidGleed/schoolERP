angular.module('school_erp')
.controller("chaptersController",['$http','$scope', function($http, $scope){
        $scope.chapterData = [1,2,3];
         $scope.editdata = [];
         $scope.EditChapters = function(value){
        $scope.editdata = $scope.chapterData[value];
    }
}])

