"use strict";

(function(){
  angular
  .module("todo")
  .controller("TodoIndexCtrl", [
    TodoIndexFunc
  ]);

  function TodoIndexFunc(){
    this.todos = [
      {task: "Buy Pants.", completed: false},
      {task: "Sell Pants at a significant markup.", completed: true},
      {task: "Repeat", completed: false}
    ];

    this.newTask = "";

    this.remove = function(i){
      this.todos.splice(i,1);
    }

    this.addTask = function(){
      this.todos.push({task: this.newTask, completed: false});
      this.newTask="";
    }
  }
})();
