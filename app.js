"use strict";

(function(){
  angular
    .module("todo", [])
    .controller("todo_controller", TodoController);
  function TodoController(){
    var viewmod = this;
    viewmod.data = data;
    viewmod.sort_data_by = function(item){
      viewmod.sort_on = item;
      viewmod.is_descending = !(viewmod.is_descending);
    };
    viewmod.destroy = function(item){
      var index = viewmod.data.indexOf(item);
      viewmod.data.splice(index, 1);
    };
    viewmod.new_item = {};
    viewmod.create = function(){
      viewmod.data.push(angular.copy(viewmod.new_item));
      viewmod.new_item = {};
    };
  }
})();
