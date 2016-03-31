"use strict";

(function(){
  angular
  .module("toDo")
  .controller("ToDoIndexController", [
    "ToDoList",
    ToDoIndexControllerFunction
  ]);

  function ToDoIndexControllerFunction( ToDoList ){
    console.log("We have so much to do and so little time!")
   }
}());
