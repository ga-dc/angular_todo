"use strict";

(function () {
  angular
    .module("todos", ["ngResource"])
    .controller("todosCtrl", ["$resource", ctrlFunction])

    function ctrlFunction ($resource) {
      var vm = this;
      var Todo = $resource("/todos/:id.json", {}, {
        update: {method: "PUT"}
      });
      vm.todos = Todo.query();
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
          var todo = vm.todos[index];
          Todo.remove({id: todo.id}, function(response) {
            if (response.success){
              vm.todos.splice(index, 1);
            }
          })
        }
      }
      vm.updateTodo = function (todo) {
        if (todo) {
          todo.showEditForm = !todo.showEditForm
        }
      }
    }
})();
