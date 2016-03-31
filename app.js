"use strict";

(function(){
    angular
    .module('TaskBastard', [
      // add dependencies here
    ])
    .controller('TBController', function(){
      var vm = this;
      vm.tasks = data;
      console.log(vm.tasks);

      vm.create = function(task){
        vm.tasks.push(task)
        console.log(vm.tasks)
      }

      vm.edit = function(task){
        vm.task.update(task)
      }
  });
})();
