angular.module('school_erp')
.controller("employeeController",['$http','$scope','employeeServices', function($http, $scope, employeeServices){
        $scope.employeeData = [];
        employeeServices.getEmployee()
        .success(function(data, status){
            $scope.employeeData = data.employee;
        })
        .error(function(data,success){
        })

          $scope.open = function () {

        // $modal.open({
        //     templateUrl: 'app/components/employee/employeeModal.html', // loads the template
        //     backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
        //     windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
        //     controller: function ($scope, $modalInstance, $log, user) {
        //         $scope.user = user;
        //         $scope.submit = function () {
        //             $log.log('Submiting user info.'); // kinda console logs this statement
        //             $log.log(user); 
        //             $modalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
        //         }
        //         $scope.cancel = function () {
        //             $modalInstance.dismiss('cancel'); 
        //         };
        //     },
        //     resolve: {
        //         user: function () {
        //             return $scope.user;
        //         }
        //     }
        // });//end of modal.open
    }; // end of scope.open function
}])

