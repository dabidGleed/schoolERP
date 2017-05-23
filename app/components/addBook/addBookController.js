angular.module('school_erp')
.controller("addBookController"['$http','$scope', function($http, $scope){
        $scope.addBook = [];
        employeeServices.getaddBook()
        .success(function(data, status){
            $scope.addBook = data.addBooks;
        })
        .error(function(data,success){
        })
}])

