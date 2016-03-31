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
      "Eat food",
      "Excercise 30 min",
      "Take a Shower"
    ];

    vm.create = function(){
      vm.todos.unshift(vm.content);
      vm.content = "";
    }

    vm.edit = function(index){
      var todo = vm.todos[index];
      vm.content = todo;
    };

    vm.update = function(index){
      vm.todos[index] = vm.content;
    };

    vm.delete = function(index){
      vm.todos.splice(index, 1);
    }
  }
})();
