"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todoController", controllerFunction);

  function controllerFunction(){
    var vm = this;
    vm.todos = [];
    vm.hello = "Hello Pizza!";
    console.log("pizza is displayed");


    vm.createNew = function(){
      console.log("New Todo clicked");
      vm.todos.unshift(vm.new_todo);
      vm.new_todo = "";
      console.log(vm.todos);
    }

    vm.edit = function(index){
      var todo = vm.todos[index];
      vm.content = todo;
    }

    vm.update = function(index){
      vm.todos[index] = vm.content;
    }

    vm.delete = function(index){
      vm.todos.splice (index, 1);
    }

  }

})();
