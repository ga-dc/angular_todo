"use strict";

//having funtion in the beginning like this is an iife its an angular convention to use it.

//todoApp is the name of the module
// []representes an empty array where dependencies can be injected.
// TodoListController is the name of the controller
angular.module("todoApp", [])
.controller("TodoListController", function(){
  var vm = this
  var todoList =  [
    {text:"Declare that Bipin is invincible", done:true},
    {text:"Make sun revolve around me", done:true},
    {text:"Let Adrian W. hug me", done:true},
    {text:"Learn basic programming", done:false}
  ];
  vm.todos = todoList;


vm.itemAdded = function(){
todoList.push({text:vm.todoText, done:false})
};
// $index is ng-repeats side effect which is in thtml file. and im passing index as a place holder so splice can be mapped.
vm.itemDelete = function(index){
  todoList.splice(index, 1)
};
vm.itemEdit = function(){
  todoList.edit({text:vm.todoText})
}

});







//
// );
//
//   function ControllerFunction(){
//     var vm = vm;
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
