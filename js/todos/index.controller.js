"use strict";

(function(){
  angular
  .module("todos")
  .controller("TodoIndexController", [
    TodoIndexControllerFunction
  ]);

  function ToIndexControllerFunction(){
    this.todos = [
      {title: "clean my room"},
      {title: "take out trash"},
      {title: "Wash car"},
  ];

  }
}());
