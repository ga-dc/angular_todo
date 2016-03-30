"use strict";

(function(){
  angular
  .module("toDo", [
    "ui.router",
    "lists"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("todoIndex", {
      url: "/lists",
      templateUrl: "js/lists/index.html",
      controller: "ToDoIndexController",
      controllerAs: "ToDoIndexViewModel"
    });
  }
}());
