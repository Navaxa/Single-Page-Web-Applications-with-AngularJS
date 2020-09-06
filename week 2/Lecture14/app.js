(function () {
  "use-stric";
  angular
    .module("ConterApp", [])
    .controller("CounterController", CounterController);

    CounterController.$inject = ['$scope'];

  function CounterController($scope) {
      $scope.onceCounter = 0;
      $scope.counter = 0;
      $scope.name = 'Miguel';

    $scope.showNumberOfWatches = function(){
        console.log("nombre of Watcher", $scope.$$watchersCount);
    };

    $scope.counterOnce = function (){
        $scope.onceCounter = 1;
    };

    $scope.upCounter = function() {
        $scope.counter++;
    };

    $scope.$watch(function () {
        console.log('Digest Loop Fired');
    })

    /* $scope.$watch('onceCounter', function(newValue, oldValue){
        console.log("onceCounter new Value: ", newValue);
        console.log("onceCounter  old Value: ", oldValue);
    });

    $scope.$watch('counter', function(newValue, oldValue){
        console.log("counter new Value: ", newValue);
        console.log("counter old Value: ", oldValue);
    }); */


  }
})();
