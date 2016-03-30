"use strict";

var app = angular.module('TaskBastard', []);

app.controller('TBController', function(){
this.tasks = tasks;
console.log(this.tasks);

});




// (function(){
//   angular
//   .module("TaskBastard", [])
//   .controller("AppController", AppController
//   );
//
//   function AppController(){
//     var vm = this;
//     vm.taskList = data;
//     console.log(vm.taskList);
//
//
//     vm.newTask = function(){
//       vm.taskList.push({task: vm.taskText})
//
//
//     };
//   }
// })();
// // these close out iffe
