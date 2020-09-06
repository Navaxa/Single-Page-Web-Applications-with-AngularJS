(function () {
  "use strict";

  angular
    .module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("aName", customFilter)// paso 2
    .filter("truth", TruthFilter);

  /* 
    Paso 1: Crear función de fabrica de filtros   que devuelve otra función.

    Paso 2: Agrege el nombre de la funcion .filter

    Paso 3: Agregamos el elemiento en la matriz del injector (nombreFiltro + Filter).


  */
  // <- nombrefiltro + Filter PASO 3
  MsgController.$inject = ["$scope", "aNameFilter"];

  function MsgController($scope, aNameFilter) {
    $scope.name = "Miguel";
    $scope.stateOfBeing = "facebook";

    $scope.sayMessage = function () {
      var msg = "Miguel is learning AngularJS";
      return msg;
    };

    $scope.changeWords = function () {
      var msg = "Miguel is learning AngularJS";
      msg = aNameFilter(msg);
      return msg;
    };

    $scope.feedBuild = function () {
      $scope.stateOfBeing = "github";
    };
  }
  // PASO 1
  function customFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("learning", "enjoying");
      return input;
    };
  }

  function TruthFilter (){
    return function (input, target, replace){
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
