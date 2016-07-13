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
      vm.newTodo = new Todo();
      vm.addTodo = function () {
        Todo.save(vm.newTodo, function (response) {
          vm.todos.push(response);
          vm.newTodo = {};
        })
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
          Todo.update({id: todo.id}, todo, function (response) {
            todo.showEditForm = !todo.showEditForm
          })
        }
      }
    }
})();
