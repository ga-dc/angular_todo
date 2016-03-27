"use strict";


(function(){
  angular
  .module ("Angular ToDo App", [])
  .controller("ToDo_App", ToDoFunction);
 function ToDoFunction(){
  var vm = this;
  vm.name = "To Do !";

 }


})();
