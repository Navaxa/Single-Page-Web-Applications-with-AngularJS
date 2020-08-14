(function () {
  "use strict";
  angular
    .module("myFirtsApp", [])
    .controller("myFirstController", function ($scope) {
      $scope.name = "Miguel";
      $scope.saluda = function () {
        return "Hola Coursera";
      };
    });
})();
