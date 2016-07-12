"use strict";

(function () {
  angular
    .module("todos", [])
    .controller("todosCtrl", [ctrlFunction])

    function ctrlFunction () {
      var vm = this;
      vm.todos = [
        {title: "Walk the dog", completed: false},
        {title: "Buy groceries", completed: false},
        {title: "Eat foot", completed: false},
        {title: "Smell fish", completed: false}
      ];
      vm.newTodo = {};
      vm.addTodo = function () {
        vm.todos.push({
          title: vm.newTodo.title,
          completed: false
        });
        vm.newTodo = {};
      }
      vm.removeTodo = function (index) {
        if (vm.todos[index]) {
          vm.todos.splice(index, 1)
        }
      }
      vm.updateTodo = function (todo) {
        if (todo) {
          todo.showEditForm = !todo.showEditForm
        }
      }
    }
})();
