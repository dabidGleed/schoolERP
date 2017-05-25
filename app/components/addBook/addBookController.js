angular.module('school_erp')
.controller("addBookController",['$http','$scope','addBookServices', function($http, $scope, addBookServices){
        $scope.data = [];
         $scope.addBook= function(data){
             var bookDetails = {

                    book_title:$scope.data.book_title,
                    author_name:$scope.data.author_name,
                    book_price:$scope.data.book_price,
                    qty:$scope.data.qty,
                    rack_number:$scope.data.rack_number,
                    inward_date:$scope.data.inward_date,
                    book_description:$scope.data.book_description,
                    subject:$scope.data.subject
             }
            addBookServices.setBook(bookDetails)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>Books are Added Successfully.</p>',
                plain: true
                });
                $scope.examData = [];
                $scope.getBook();
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }
  
     
     

}])



