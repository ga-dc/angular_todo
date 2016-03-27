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

    vm.destroy = function(task){
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };
    vm.new_task = {};
    var form = document.querySelector('input');
    vm.create = function(){
      vm.new_task = form.value;
      vm.tasks.push(angular.copy(vm.new_task));
      form.value="";
    };
  }
})();
