// Create the application module
var myApp = angular.module('MyApp', []);

myApp.controller("ParentController", function ($scope, $rootScope) {

    //broadcast the event down
    $scope.m1 = function (evt) {
        $scope.$broadcast("remove", "some data");
    }

    $scope.$on("added", function (evt, data) {
        $scope.Message = "Inside handler of MyController1 : " + data;
    });

});

myApp.controller("ChildController", function ($scope, $rootScope) {

    $scope.$on("remove", function (evt, data) {
        $scope.Message = "Inside handler of MyController2 : " + data;
    });

    $scope.m2 = function (evt) {
        $scope.$emit("added", "some data");
    }

});



myApp.controller("MyController3", function ($scope, $rootScope) {

    $scope.$on("remove", function (evt, data) {
        $scope.Message = "Inside MyController2 : " + data;
    });

    $scope.$on("added", function (evt, data) {
        $scope.Message = "Inside MyController2 : " + data;
    });

});