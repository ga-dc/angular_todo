"use strict";

(function(){
  angular
  .module("todo", [
    "ui.router"
    //"ngRsource"
  ])
  .config([
    "$stateProvider",
    Router
  ]);

  function Router($stateProvider){
    $stateProvider
    .state("todoIndex", {
      url: "/todos",
      templateUrl: "views/index.html",
      controller: "TodoIndexCtrl",
      controllerAs: "vm"
    });
  }

})()
