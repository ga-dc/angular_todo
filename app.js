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

    vm.edit_todo = function(id){
        vm.todo_to_edit = vm.todos_list[id];
    };

    vm.update_todo = function(id){
      vm.todos_list[id] = vm.todo_to_edit;
    };

    //guittr done yo
    vm.destroy_todo = function(id){
      vm.todos_list.splice(id, 1);
    };

  }

})();
