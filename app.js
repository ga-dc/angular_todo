'use strict';

(function(){
  angular
  .module('task', [])
  .controller('tasks_controller', TaskController );

  function TaskController() {
    var vm = this;
    vm.data = ['sample1',
              'sample2',
              'sample3'];

    vm.new_task = '';
    vm.create = function() {
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = '';
    }; // end of create

    vm.edit = function(index) {
      var todo = vm.data[index];
      vm.content = todo;
    }; // end of edit

    vm.update = function(index) {
      vm.data[index] = vm.content;
    }; // end of update

    vm.destroy = function(index) {
      vm.data.splice(index, 1);
    }; // end of destroy
  } // end of TaskController
})();
