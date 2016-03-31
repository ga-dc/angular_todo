"use strict";

(function(){
  angular
  .module("toDo", [] )
  .controller("toDoListController", ToDoListController);

  function ToDoListController(){
    var vm = this;
    vm.data = data;
    vm.destroy = function(list_index){
      vm.data.splice(list_index, 1);
    }
    vm.new_item = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_item));
      vm.new_item = {};
    }
  };
}());
