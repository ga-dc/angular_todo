"use strict";

(function(){
  angular.module('toDoApp', []).controller('list_controller', ListController);
  function ListController(){
    var toggleStatus = 0;
    var vm = this;
    vm.tasks = tasks;
    vm.taskAdder = function(){
      var taskBox = document.getElementById('task-field').value;
      var taskNotes = document.getElementById('add-notes-field').value;
      if(taskBox !== '' || taskNotes !== '') {
        vm.tasks.push({
          name: taskBox,
          notes: taskNotes
        });
      }
      document.getElementById('task-field').value = '';
      document.getElementById('add-notes-field').value = '';
    };
    vm.deleteTask = function(task){
      console.log('hey');
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };
    vm.editTask = function(task){
      var index = vm.tasks.indexOf(task)
      if(toggleStatus == 0){
        document.getElementById('name-input-' + index).style.display = "block";
        document.getElementById('notes-input-' + index).style.display = "block";
        document.getElementById('name-text-' + index).style.display = "none";
        document.getElementById('notes-text-' + index).style.display = "none";
        toggleStatus = 1;
      } else if(toggleStatus == 1){
        document.getElementById('name-input-' + index).style.display = "none";
        document.getElementById('notes-input-' + index).style.display = "none";
        document.getElementById('name-text-' + index).style.display = "block";
        document.getElementById('notes-text-' + index).style.display = "block";
        toggleStatus = 0;
      }
    };
  }
}());
