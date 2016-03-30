"use strict";

(function(){
  angular
  .module("todo" ,[] )
  .controller("todosController",ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.todos = [
      "Wake up",
      "Go shopping",
      "Eat food"
    ];

    vm.create = function(){
      vm.todos.unshift(vm.content);
      vm.content = "";
    }
    






  }


})();
