"use strict";

var app = angular.module('Todo', []);
app.controller('Todo_controller', function($scope) {
  $scope.newTodo = '';

  $scope.todos = [];

  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };

   $scope.add = function(event) {
    if (event.which && event.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };
});
