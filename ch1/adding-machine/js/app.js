var myApp = angular.module("myApp", []);

myApp.controller("FirstController", [
    "$scope",
    function ($scope) {
        $scope.counter = 0;
        $scope.add = function (amount) {
            $scope.counter += amount;
        };
        $scope.subtract = function (amount) {
            $scope.counter -= amount;
        };
    },
]);
