"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController);

  function TodoController() {
    var item = this;
    item.data = data;
    item.new_item = {};
    item.destroy = function(activity){
      var index = item.data.indexOf(activity);
      item.data.splice(index, 1);
    }
    item.create = function(){
      item.data.push(angular.copy(item.new_item));
      item.new_item = {};
    }
    item.edit = function(activity){
      item.data.selected = angular.copy(activity);
  };
  }
  })();
