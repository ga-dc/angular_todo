"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var vm = this;
    vm.data = data;

    vm.destroy = function(todo){
      var index = vm.data.indexOf(todo);
      vm.data.splice(index, 1);
    };

    vm.new_task = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
    };

  }

})();
