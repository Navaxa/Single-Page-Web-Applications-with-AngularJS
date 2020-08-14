(function () {
  "use strict";
  angular
    .module("NameCalculator", [])
    .controller("NamecalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        var totalNameValue = calculateNumericString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericString(string) {
        var totalStringValue = 0;
        var count = 0;
        for (var k = 0; k < string.length; k++) {
          totalStringValue += string.charCodeAt(k);
          count ++;
        }
        return totalStringValue;
      }
    });
})();
