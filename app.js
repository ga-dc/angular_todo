"use strict";

(function(){
  angular.module('toDoApp', []).controller('list_controller', ListController);
  var tasks = [{name: 'dinner'}];
  function ListController(){
    var vm = this;
    vm.tasks = tasks;
    vm.taskAdder = function(){
      var taskBox = document.getElementById('task-field').value;
      if(taskBox !== '') {
        vm.tasks.push({
          name: taskBox
        });
      }
      document.getElementById('task-field').value = '';
    };
    vm.deleteTask = function(){
      
    };
  }
})();
