"use strict";
(function(){
  angular
  .module("task",[])
  .controller("taskController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.task = task;

  };

  vm.new_task = {};
  vm.create = function(){
    vm.task.push(angular.copy(vm.new_task));
    vm.new_task= {};
  };
  }
  //
  // vm.edit = function(index){
  //       var tasks = vm.task[index];
  //       vm.new_task = task;
  //     };

})();
