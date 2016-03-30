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
      },
      {
        task: "Learn AngularJS",
      },
      {
        task: "Make lunches for the week",
      }
    ];

    vm.create = function() {
      vm.tasks.push({task: vm.formToDoText, done: false});

      vm.formToDoText = '';
    }

    vm.delete = function(task_index) {
      console.log(vm.tasks)
      console.log(task_index)

      vm.tasks.splice(task_index, 1);
    }
    //
    // vm.edit = function(task_index, element) {
    // //   vm.tasks[task_index].edit = true;
    // //
    // //   for (var i=0; i<vm.tasks.length; i++) {
    // //     if (vm.tasks[i].edit) {
    // //       angular.element("body").append("<div>Hello</div>")
    // //     }
    // //   }
    // // }
  };
})();
