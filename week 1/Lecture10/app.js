/* (function () {
  angular.module("DIapp", [])
  .controller("DIController", DIController);

  DIController.$inject = ['$scope', '$filter'];

  function DIController ($scope, $filter) {
    $scope.name = "Angel";

    $scope.upper = function () { 
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.lower = function () {
      var loCase = $filter('lowercase');
      $scope.name = loCase($scope.name);
    };

  }
})();
 */

!(function () {
  function e(e, n) {
    (e.name = "Angel"),
      (e.upper = function () {
        var a = n("uppercase");
        e.name = a(e.name);
      }),
      (e.lower = function () {
        var a = n("lowercase");
        e.name = a(e.name);
      });
  }
  angular.module("DIapp", []).controller("DIController", e),
    (e.$inject = ["$scope", "$filter"]);
})();
