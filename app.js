"use strict"
(function(){
  angular
  .module("task",[])
  .controller("task_controller", TaskController);

  function TaskController(){
    var vm = this;
    vm.data = [];
  }

  // vm.edit = function(){
  //   vm.data
  // }

  vm.create = function(){
    vm.data.push(angular.copy(vm.new_task));
    vm.new_task = {};
  }
  }
})();
