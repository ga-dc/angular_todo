"use strict";

(function(){
  angular
  .module("myTodo", [])
  .controller("vm", myTodoController);

  function myTodoController($scope){
    var vm = $scope
    vm.task
    vm.todos = todos;

    vm.destroy = function(index) {
      vm.todos.splice(index, 1);
    }
  }
})();
