/* console.log("Number arryay: ", numberArray);
console.log("Filtered number arryay: ", filteredNumberArray );
console.log("Filter List: ", shoppingList1);
console.log("Searche Shopping List: ", searchShoppingList); */

(function () {
  "use strict";

  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var shoppingList1 = [
    "Milk",
    "Donuts",
    "Cookies",
    "Chocolate",
    "Peanut Butter",
    "Pepto Bismol",
    "Peptp Bismol (Chocolate flavor)",
    "Pepto Bismol (Cookie flavor)",
  ];

  var filteredNumberArray = numberArray.filter(above5Filter);

  function above5Filter(value) {
    return value > 5;
  }
  var searchShoppingList = shoppingList1.filter(containsFilter);

  var searchValue = "Bismol";
  function containsFilter(value) {
    return value.indexOf(searchValue) != -1;
  }
  angular
    .module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController);

  ShoppingListController.$inject = ["$scope"];

  function ShoppingListController($scope) {
      $scope.shoppingList1 = shoppingList1;
  }
})();
