(function () {
  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];

  function MsgController($scope) {
    $scope.name = "Miguel";
    $scope.stateOfBeing = "facebook";
    $scope.flag = 0;

    $scope.sayMessage = function () {
      return "Miguel is learning AngularJS";
    };

    $scope.feedBuild = function () {
      if ($scope.stateOfBeing == "facebook")
        return ($scope.stateOfBeing = "github");

      if ($scope.stateOfBeing == "github")
        return ($scope.stateOfBeing = "facebook");
    };
  }
})();
