"use strict";

(function(){
  angular
  .module("todo", [
    "xeditable"
  ])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var vm = this;
    vm.data = data;

    vm.destroy = function(todo){
      var index = vm.data.indexOf(todo);
      vm.data.splice(index, 1);
    };

    vm.new_todo = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_todo));
      vm.new_todo = {};
    };

  }

})();
