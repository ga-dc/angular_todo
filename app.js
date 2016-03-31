'use strict';

(function(){
  angular
  .module("todo", [] )
  .controller("todolistController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.data = data;

    vm.create = function(){
      vm.data.push(angular.copy(vm.new_todo));
      vm.new_todo = {};
    };

    vm.edit = function(index){
      var data = vm.data[index];
      vm.content = data;
    };

    vm.update = function(index){
      vm.data[index] = vm.content;
    };

    vm.destroy = function(todo_index){
      vm.data.splice(todo_index, 1);
    }
  };
}());
