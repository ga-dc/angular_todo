"use strict";

(function() {
  angular
  .module('todo', [])
  .controller("todosController", ControllerFunction);

})()


function ControllerFunction(){
  var vm = this;
  this.todos = [
    "Walk the dog",
    "Buy groceries",
    "Drink coffee",
    "Wake up like this"
  ];

}
