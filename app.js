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
    viewmod.destroy = function(task){
      var index = viewmod.data.indexOf(task);
      viewmod.data.splice(index, 1);
    };
    viewmod.new_task = {};
    viewmod.create = function(){
      viewmod.data.push(angular.copy(viewmod.new_task));
      viewmod.new_task = {};
    };
    viewmod.edit = function(){
      console.log("Is this not the edit function you're looking for?");
      }
    };
  }
})();
