angular.module('school_erp')
.controller("bookListController",['$http','$scope','addBookServices', function($http, $scope, addBookServices){
        $scope.data = [];
        addBookServices.getBook()
        .success(function(data, status){
    
            $scope.data = data.books;
        })
        .error(function(data,success){
        })

        $scope.EditBook = function(value){
        $scope.editdata = angular.copy($scope.data[value]);
    }
}])

