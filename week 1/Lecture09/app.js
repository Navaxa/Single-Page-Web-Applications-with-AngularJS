(function () {
  angular.module("DIapp", [])
  .controller("DIController", DIController);

  function DIController ($scope, $filter, $injector) {
    $scope.name = "Angel";

    $scope.upper = function () { 
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.lower = function () {
      var loCase = $filter('lowercase');
      $scope.name = loCase($scope.name);
    };

    console.log($injector.annotate(DIController));
  }
})();
