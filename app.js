"use strict";

(function(){
  angular
    .module("todo", [])
    .controller("todo_controller", TodoController);
  function TodoController(){
    var viewmod = this;
    viewmod.todo = "I've got shit to do!";
  }

})();
