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
        var added_detail = document.getElementById('task_input').value;
        var added_task = document.getElementById('detail_input').value;
        added_detail.push(list.detail);
        added_task.push(list.task);
  }


};


  }());
