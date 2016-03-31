"use strict";

(function (){
  angular
  .module("toDoList", [])
  .controller("toDoController",
  toDoControllerFunction);

  function toDoControllerFunction (){
      var list=this
      list.task=["Grocery List" , "Take Car To Shop"];
      list.detail= ["eggs, milk, butter" , "get itemized receipt, look at breaks, rotate tires"];

      list.new_task={};
      list.create= function () {
        var list=this
        list.task=["Grocery List" , "Take Car To Shop"];
        list.detail= ["eggs, milk, butter" , "get itemized receipt, look at breaks, rotate tires"];
        list.task.push(angular.copy(list.new_task));
        list.detail.push(angular.copy(list.new_detail));
        list.new_task = {};
        
        list.new_detail.push(list.detail);
        list.new_task.push(list.task);
  }


};


  }());
