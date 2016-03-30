"use strict";

(function (){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController(){
    var vm = this;
    vm.task = data;

    //creating things
    vm.new_todo = {};
    vm.create = function(){
      vm.task.push(angular.copy(vm.new_todo));
      vm.new_todo = {};
    };

    //deleting things
    vm.delete = function(task_index){
      vm.task.splice(task_index, 1);
    };
  } //ends todo controller

})();
