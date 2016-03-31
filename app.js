"use strict";

(function(){
  angular
  .module("todo", [

  ])
  .controller("todo_controller",
  ToDoController);

  function TodoController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(item){
      vm.sort_on = item;
      vm.is_descending = !(vm.is_descending);
      console.log("sort_data")
    };
    vm.new_task = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
      console.log("create function")
    };
    vm.edit = function(){
      console.log("edit function");
      }
      vm.destroy = function(task){
    
        console.log("destroy function")
      };
    };
    }
    })();
