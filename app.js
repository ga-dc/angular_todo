"use strict";
(function(){
  angular
  .module("task",[])
  .controller("taskController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.tasks = [""];




  vm.create = function(){
    console.log("hello");
    vm.tasks.push(vm.new_task);
    vm.new_task = "";
  };


  vm.edit = function(index){
    console.log(index);
    console.log(vm.edit);
    console.log(vm.tasks);
    vm.isediting = false;
    vm.tasks[index] = vm.edit;
      };

}
})();
