"user strict";

(function() {
  angular
  .module("toDo", [])
  .controller("toDoController", toDoController)

  function toDoController() {
    var vm = this;
    vm.data = data;
    vm.new_task = {};
    vm.create = function() {
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
    }
  }
}());
