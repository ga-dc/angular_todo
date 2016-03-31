'use strict';

(function(){
  angular
  .module('task', [])
  .controller('tasks_controller', TaskController );

  function TaskController() {
    var vm = this;
    vm.data = ['Walk the dogs',
              'Fold the laundry',
              'Clean out the roomba'];

    vm.new_task = '';
    vm.create = function() {
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = '';
    }; // end of create

    vm.destroy = function(index) {
      vm.data.splice(index, 1);
    }; // end of destroy
  } // end of TaskController
})();
