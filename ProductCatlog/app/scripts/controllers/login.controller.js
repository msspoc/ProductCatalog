'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        
        $scope.login = function(){
            
            $scope.dataLoading = true;
            
             AuthenticationService.stronglooplogin($scope.username, $scope.password, function(response) {
                
                if(response.status===200) {
                var isValid = false;
                angular.forEach(response.data,function(data) {
                    if(data.UserName === $scope.username &&data.Password == $scope.password) {
                        isValid = true;
                    }
                });
                if(isValid === true) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/strongLoopHome');
                } else {
                    $scope.error = response.message;
                }
                
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
            
            
        

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                
                if(response.status===200) {
                var isValid = false;
                angular.forEach(response.data,function(data) {
                    console.log(response.data.id);
                    var x=data.user_name;
                   for(var key in x){
                        var username=x[key];
                        console.log($scope.username);

                    }
                  var z= data.id;
                   for(var temp in z){
                       var sessionId=z[temp];
                       console.log($scope.sessionId);
                   }
                   
                   
                   var y= data.user_language;
                   for(var temp in y){
                       var userLanguage=y[temp];
                       console.log(userLanguage);
                   }
                   
                    var password="admin";
                    if(username === $scope.username && password == $scope.password) {
                        isValid = true;
                    }
                });
                if(isValid === true) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                }
                
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);