"use strict";

(function(){
  angular
  .module("toDoApp", [])
  .controller("itemsController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.toDoItems = [
      {
        task: "Buy a pack of squares"
      },
      {
        task: "Arrive at the apartment"
      },
      {
        task: "Confront the investor"
      },
      {
        task: "Explain the situation"
      },
      {
        task: "Have him sign the documents"
      },
      {
        task: "Bind him to a chair"
      },
      {
        task: "Handcuff him"
      },
      {
        task: "Place him facedown on the bed"
      },
      {
        task: "Shoot him once"
      },
      {
        task: "Remember gloves"
      }
    ];
    vm.destroy = function(item_index){
      vm.toDoItems.splice(item_index, 1);
    };
  }
})();
