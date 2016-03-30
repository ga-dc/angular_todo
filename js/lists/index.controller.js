"use strict";

(function(){
  angular
  .module("toDo")
  .controller("ToDoIndexController", [
    "ToDoList",
    ToDoIndexControllerFunction
  ]);

  function ToDoIndexControllerFunction( ToDoList ){

  }
})
