"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController(){
    var vm = this;
    vm.data = data;
    vm.editing = null;
    vm.addTodo = function(){
      vm.data.push({"task":this.task, "priority":this.priority});
    };
    vm.update = function(i){
      vm.data[i] = {"task":this.task_edit, "priority":this.priority_edit};
    };
    vm.delete = function(i){
      vm.data.splice(i, 1);
    };
  };

})();
