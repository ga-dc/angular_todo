"use strict";

(function(){
  angular
  .module("toDoList", [])
  .controller("toDoList_controller", ToDoListController);

  function ToDoListController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(priority){
      vm.sort_on = priority;
      vm.is_descending = !(vm.is_descending);
    }
    vm.total_time = function(){
      var total = 0;
      vm.data.forEach(function(task){
        if(task.ettc){
          total += task.ettc;
        }
      });
      var hours = Math.floor(total / 60);
      var minutes = total % 60;
      minutes = (minutes < 10 ? '0' : '') + minutes;
      return hours + ":" + minutes;
    }
    vm.destroy = function(task){
      var index = vm.data.indexOf(task);
      vm.data.splice(index, 1);
    }
    vm.new_task = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
    }
  }
})();
