"use strict";

(function(){
  angular
  .module("toDo", [] )
  .controller("toDoListController", ToDoListController);

  function ToDoListController(){
    var vm = this;
    vm.list = "So Much to Do!";
  }
}());
//     "ui.router",
//     "lists"
//   ])
//   .config([
//     "$stateProvider",
//     RouterFunction
//   ]);
//
//   function RouterFunction($stateProvider){
//     $stateProvider
//     .state("todoIndex", {
//       url: "/lists",
//       templateUrl: "js/lists/index.html",
//     })
//     .state("todoShow", {
//       url: "/lists/:id",
//       templateUrl: "js/lists/show.html"
//     });
//   }
// }());
