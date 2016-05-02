"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todoController", controllerFunction);

  function controllerFunction(){
    var vm = this;
    vm.hello = "Hello Pizza!";
    console.log("pizza is displayed");


    vm.createNew = function(){
      console.log("New Todo clicked");
    }
  }

})();
