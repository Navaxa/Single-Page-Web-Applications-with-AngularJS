(function () {
  angular
    .module("MyFirstApp", [])
    .controller("MyFirstController", MyFirstController);

  MyFirstController.$inject = ["$scope"];

  function MyFirstController($scope) {
    $scope.value = "";
    $scope.res = "";
    $scope.colorFont = {};

    $scope.verify = function () {
      var count = calculate($scope.value);

      if (count == 0) {
        var count2 = someone($scope.value);
        if (count2 == 0) {
          return ($scope.res = "Please enter data first");
        }
        return ($scope.res = "Enjoy");
      }
      if (count <= 2) return ($scope.res = "Enjoy");
      else return ($scope.res = "Too much");
    };

    function someone(string) {
      var count = 0;
      for (var k = 0; k < string.length; k++) {
        count++;
      }
      return count;
    }

    function calculate(string) {
      var split = ",";
      var count = 0;
      for (var k = 0; k < string.length; k++) {
        if (string.charAt(k) == split) count++;
      }
      return count;
    }
  }
})();
