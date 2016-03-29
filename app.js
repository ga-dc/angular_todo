"use strict";

var todoList = [
  {task: "Walk the dog"},
  {task: "Take out the trash"},
  {task: "Buy groceries"},
  {task: "Call mom"},
  {task: "Clean the house"}
];

(function(){
  angular
    .module("todo", [])
    .controller("todo_list", ToDoList);

  function ToDoList(){
    var vm = this;
    vm.todoList = todoList;
  }

})();
