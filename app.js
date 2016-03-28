"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", ToDoController);

  function ToDoController() {
    var vm = this;
    vm.tasks = [
      {
        task: "Finish to-do list homework",
        done: false
      },
      {
        task: "Learn AngularJS",
        done: false
      },
      {
        task: "Make lunches for the week",
        done: false
      }
    ];

    vm.create = function() {
      vm.tasks.push({task: vm.formToDoText, done: false});

      vm.formToDoText = '';
    }

    vm.delete = function() {
      for (var i=0; i<vm.tasks.length; i++) {
        if (vm.tasks[i].done) {
          vm.tasks.splice(i, 1);
        }
      }
    }

    vm.edit = function() {
      
    }
  };
})();
