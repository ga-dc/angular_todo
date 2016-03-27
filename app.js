"use strict";

(function(){
  angular
    .module("todo", [])
    .controller("todo_controller", TodoController);
  function TodoController(){
    var viewmod = this;
    viewmod.data = "I've got shit to do!";
  }
  

})();
