(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope", "$filter"];

  function MsgController($scope, $filter) {
    $scope.name = "Miguel";
    $scope.stateOfBeing = "facebook";
    $scope.LogoCost = .45;

    $scope.sayMessage = function () {
      var msg = "Miguel is learning AngularJS";
      var output = $filter("uppercase")(msg);
      return output;
    };

    $scope.feedBuild = function () {
      $scope.stateOfBeing = "github";
    };
  }
})();
