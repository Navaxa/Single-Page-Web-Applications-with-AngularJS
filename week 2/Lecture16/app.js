(function () {
    'use-stric';
    angular
    .module('BindingApp', [])
    .controller('BindingAppController', BindingAppController);

    BindingAppController.$inject = ['$scope'];

    function BindingAppController ($scope) {
        $scope.firstName = "Miguel";
        /* $scope.fullName = ""; */

        $scope.showNumberOfWatchers = function () {
            console.log("Numbre of Watchers: ", $scope.$$watchersCount);
        };

        $scope.setFullName = function () {
            $scope.fullName = $scope.firstName + " " + "Nava";
        };

        $scope.logFirstName = function () {
            console.log("First name is: ", $scope.firstName);
        };

        $scope.logFullName = function () {
            console.log("Full name is: ", $scope.fullName);
        };

    }
})();