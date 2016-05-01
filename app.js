"use strict";

(function(){
  angular
  .module("toDo", [])
  .controller("toDo_controller", InventoryController);

  function InventoryController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }

    vm.destroy = function(product_index){
      vm.data.splice(product_index, 1);
    }

    vm.new_note = {};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_note));
      vm.new_note = {};
    };

  }
})();
