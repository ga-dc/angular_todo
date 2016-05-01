"use strict";

(function(){
  angular
  .module("todo",[])
  .controller("todos_controller", TodosController);

  function TodosController(){
    var vm = this;
    vm.todos_list = ["oh","uh","blah"];

    // Create
    vm.new_todo = function(){
        vm.todos_list.push(vm.new_todo_item);
        vm.new_todo_item = "";
    };

  }

})();
