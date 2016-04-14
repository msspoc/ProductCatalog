'use strict';

/**
 * @ngdoc function
 * @name productCatlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productCatlogApp
 */
angular.module('productCatlogApp')
   .controller('RegisterController',['$http','$scope', '$location', '$rootScope',
        function ($http,$scope, $location, $rootScope) {
        
        $scope.register = function ()  {
            var data='{ "FirstName":"' +$scope.firstname+'","MiddleName":"' +$scope.middlename+'","LastName":"' +$scope.lastname+'",
            "UserName":"' +$scope.username+'", "Password":"'+ $scope.password+'"}';
            
            
            
            var config = {
                headers : {
                    "content-type": "application/json; charset=utf-8"
                }
            }

           // $http.post('', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            });
           
        };
 
}]);
