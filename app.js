"use strict";

(function() {
  angular
  .module('todo', [])
  .controller("todosController", function(){
    this.todos = [
      "Walk the dog",
      "Buy groceries",
      "Drink coffee",
      "Wake up like this"
    ]
  });

})()
