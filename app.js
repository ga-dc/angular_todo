"use strict";

(function(){
  angular
  .module("todo", [
    "xeditable",
    "dndLists"
  ])
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
      for (var i = 0; i < vm.todos.length; i++) {
          if (vm.todos[i].done)  {
             vm.todos.splice(i, 1);
             (i = -1)
          };
      };
    };
    // console.log(vm.todos)
  };
})();
