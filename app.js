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
   vm.new = function(){

   };
   vm.edit = function($scope){
   };

   vm.create = function(){
   };
   vm.update = function(){

     vm.content=todo;
   };
   vm.delete = function(){

   };
})();
