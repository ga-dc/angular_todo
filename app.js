"use strict";

(function() {
  angular
    .module('todo', [])
    .controller("todosController", ControllerFunction);

    function ControllerFunction(){
      var vm = this;
      this.todos = [
        "Walk the dog",
        "Buy groceries",
        "Drink coffee",
        "Wake up like this"
      ];

      this.formIsVisible = false
      this.toggleForm = function(){
        console.log("toggleform")
        if(this.formIsVisible){
          this.formIsVisible = false
        }
        else{
          this.formIsVisible = true
        }
      };

      vm.create = function(){
        vm.todos.unshift(vm.content);
        vm.content = "";
      };

      vm.edit = function(index){
        var todo = vm.todos[index];
        this.content = todo;
      };

      vm.update = function(index){
        vm.todos[index] = vm.content;
      };

      vm.delete = function(index) {
        vm.todos.splice( index, 1 );
      };
    }
})()
