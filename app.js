//puts Javascript in 'expert mode'
"use strict";

//immediately-invoked function express (IIFE). Keeps the app from having many global variables
(function(){
//declaring the components. always begins with "angular"
  angular
//components are only written on separate lines due to readability
//"todo" is the first argument and is the "name" of the app
//the [] is necessary for dependancy injection (angular's way of loading other modules and libraries)
  .module("todo", [])
//the first argument within this controller is the "name" of the controller
//the second argument is the function that encloses all functionality of the controller
  //this can be called anything, but, for best practices, we call it the ControllerFunction
  .controller("todosController", ControllerFunction);

//referring back to the ControllerFunction defined as the second argument above
  function ControllerFunction(){
//Becaue the controller is the interface between data and views, the data is saved to "this"
  //vm is the variable "this" will be saved to
  //vm is "view model"
    //the "view model" is the object that contains the data that I want to show up in my view, but ALSO contains methods for people using the view to interact with that data
    var vm = this;
//I now attach that "view model" to todos.
  //in the index.html, I can now refer to "todos" and retrieve the data that is always attached to the "view model"
    vm.todos = [
//put my chosen "to dos" into strings within the object
  //this is what will later be rendered
      "Complete my homework",
      "Pick up ingredients for dinner",
      "Finish painting",
      "Call Mom and Dad",
      "Pick up Time from airport"
    ];

this.create = function(){
  this.data.push({title: this.newToDo, completed: false});
}


})();
