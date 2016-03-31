"use strict";

(function(){
  angular
    .module("toDo", [])
    .controller("todo_controller", ToDoControllerFunction);

    function ToDoControllerFunction(){
      var vm = this;
      vm.hello = "Hello, world!";
    };
}());
