"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var vm = this;
    vm.todos = [
      {text:'learn angular', done:false},
      {text:'build an app', done:false},
      {text:'get new todo to save', done:false}
    ];

    vm.addTodo = function(){
      vm.todos.push({text:vm.formTodoText, done:false});
      vm.formTodoText = '';
    };

    vm.clearCompleted = function(){
        for(i = 0; vm.todos.length; i++) {
          vm.todos = !todo.done;
      }
    };
  };
})();
