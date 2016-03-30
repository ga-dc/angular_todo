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
    vm.new_task = {};
    vm.create = function(){
      vm.todoList.push(vm.new_task);
      vm.new_task = {};
    }
    vm.edit = function(index){
      vm.taskContent = vm.todoList(index).task
    }
    vm.update = function(index){
      vm.todoList[index].task = vm.taskContent;
    }
    vm.destroy = function(new_task){
      vm.todoList.splice(new_task, 1);
    }
  }
})();
