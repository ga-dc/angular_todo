"use strict";

(function(){
  angular
  .module("toDo", [
    "ui.router",
    "grumbles"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("listIndex", {
      url: "/lists",
      templateUrl: "js/lists/index.html",
      controller: "ToDoIndexController",
      controllerAs: "ToDoIndexViewModel"
    });
  }
}());
