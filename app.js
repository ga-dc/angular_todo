"use strict";

(function(){
    angular
    .module('TaskBastard', [])
    .controller('TBController', function(){
      var vm = this;
      vm.tasks = data;
      console.log(vm.tasks);

      vm.create = function(task){
        vm.tasks.push(task)
        console.log(vm.tasks)
      }

      vm.destroy = function(task){
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
      }


  });
})();
