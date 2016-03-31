"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController(){
    var vm = this;
    vm.todoList = [
      "Pick up Younger brother",
      "Buy groceries",
      "Clean room",
      "Shower",
      "Go get drunk"
    ];

    vm.formIsVisible = false;
    vm.toggleForm = function(){
      if(vm.formIsVisible){
        vm.formIsVisible = false;
      }
      else{
        vm.formIsVisible = true;
      }
    };

    vm.create = function(){
      vm.todoList.push(vm.action);
      vm.action = "";
    };
    vm.update = function(index){
      vm.todoList[index] = vm.action;
    };

    vm.destroy = function(index){
      vm.todoList.splice(index, 1)
    }
  }
})();
