'use strict';

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var vm = this;
    vm.tasks = [
      "Hello World",
      "Goodbye, Cruel World.",
      "Hello, Mars"
    ];
  }
})();
