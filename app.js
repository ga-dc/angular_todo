"use strict";

(function() {
  angular
    .module("myApp", [])
    .controller("todoController", TodoController);

    function TodoController() {
      var vm = this;

      vm.todos = [
                  {text: "wash the doge", completed: true},
                  {text: "say hi to Andy", completed: false},
                  {text: "teach angular", completed: false}
                ];

      vm.newTodo = {text: "", completed: false};

      vm.addTodo = function() {
        vm.todos.push(vm.newTodo);
        vm.newTodo = {text: "", completed: false};
      };
    }

})();
