'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,$http) {
  $scope.cityNames = ['LUCKNOW','BANGALORE','PUNE','MUMBAI','JAMSHEDPUR'];
  $scope.fetchBankDetails = function() {
    console.log($scope.selectedCity);
    $http.get("https://app.fyle.in/api/bank_branches/?city=" + $scope.selectedCity)
    .then(function(response)

    { 
      $scope.bankDetails = response.data; 
      console.log($scope.bankDetails)
    });
  }
}
);