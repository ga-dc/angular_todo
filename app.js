"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var item = this;
    item.data = data;
    item.sort_data_by = item.decending;
    item.new_item = {};
    item.create = function(){
      item.data.push(angular.copy(item.new_item));
      item.new_product = {};
    };
  }
  })();
