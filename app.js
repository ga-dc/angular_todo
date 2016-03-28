"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", ToDoController);

  function ToDoController() {
    var vm = this;
    vm.tasks = [
      "Finish to-do list homework",
      "Learn AngularJS",
      "Go to the gym...jk",
      "Make lunches for the week"
    ];

    vm.create = function() {
      vm.tasks.push(vm.formToDoText);
      
      vm.formToDoText = '';
    }

    vm.delete = function() {
      $(".task").on("click", function(){
        var self = this;
        var task = $(self).val();

        $.ajax({
          type: 'DELETE',
          data: vm.task,
          dataType: 'json',
        }).done(function(response){
          console.log(response)
        }).fail(function(response){
          console.log("Ajax get request failed");
        }).always(function(response){
          console.log("Always!")
        })
      })
    }
  };
})();
