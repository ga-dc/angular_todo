"use strict";

(function() {
  angular
  .module("toDo", [])
  .controller("toDoController", toDoController);

  function toDoController() {
    this.data = [
      {title: "take out ethe trash", completed: false},
      {title: "walk the dog", completed: false},
      {title: "learn angular", completed: false},
      {title: "buy groceries", completed: true}
    ];

    this.create = function(){
      this.data.push({title: this.newTask, completed: false});
      this.newTask = {} //Removes text from input field
    }

    this.edit = function() {

    }

    this.delete = function() {
      this.data.pop()
    }




    // vm.new_task = {};
    // vm.create = function() {
    //   vm.data.push(angular.copy(vm.new_task));
    //   vm.new_task = {};
    // };
  }
}());
