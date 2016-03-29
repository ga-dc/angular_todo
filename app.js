"use strict";

//having funtion in the beginning like this is an iife its an angular convention to use it.

//todoApp is the name of the module
// []representes an empty array where dependencies can be injected.
// TodoListController is the name of the controller
angular.module("todoApp", [])
.controller("TodoListController", function(){
  var todoList =  [
    {text:"Declare that Bipin is invincible", done:true},
    {text:"Make sun revolve around me", done:true},
    {text:"Learn basic programming", done:false}
  ];
  this.todos = todoList;

todoList.addTodo = function(){
  todoList.todos.push({text:todoList.todoText, done:false});
  todoList.todoText = "";

};
});






//
// );
//
//   function ControllerFunction(){
//     var vm = this;
//     vm.list = [
//       "eat food",
//               "drink water",
//               "code",
//               "sleep"
//               ];
//
// vm.new_item = {};
// vm.create = function() {
//   vm.list.push(angular.copy(vm.new_item));
//   vm.new_item = {};
// }
//  };
//
//
// })();
