"use strict";


(function(){
  angular
  .module ("Angular ToDo App", [])
  .controller("ToDo_App", ToDoFunction);
 function ToDoFunction(){
  var vm = this;
  vm.todos = [
    "Go to sleep",
    "Go to sleep",
    "Go to sleep",
  ];


   vm.todos = function(){

   };

   vm.edit = function(index){
     var todo = vm.todos[index];
     vm.content =todo;
   };

   vm.create = function(){
     vm.todos.unshift(vm.content);
     vm.content = "";
   };
   vm.update = function(){
     vm.todos[index] = vm.content;

     vm.content=todo;
   };
   vm.delete = function(index){
     vm.todos.splice( index, 1);
   }
 }
})();
