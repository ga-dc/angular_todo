"use strict";

(function(){
  angular
  .module("ToDoModule")
  .controller("ToDoIndexController", [
    ToDoIndexControllerFunction
  ]);

  function ToDoIndexControllerFunction(){
    var vm = this
    vm.ToDos = ["do homework", "learn angular", "murder creator of angular"];
    vm.create = function(){
      vm.ToDos.unshift(vm.newToDo);
      vm.newToDo = "";
    };
    vm.edit = function(index){
      vm.ToDos[index] = vm.editToDo;
    };
    vm.delete = function(index){
      vm.ToDos.splice(index, 1);
    };

  }
})();
