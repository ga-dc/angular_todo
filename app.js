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
    .state()
  }
  .controller("ToDoIndexController", [
    "ToDoList",
    ToDoIndexControllerFunction
  ]);

  function ToDoIndexControllerFunction( ToDoList ) {
    this.toDo = ToDoList.query();
  }
}());
