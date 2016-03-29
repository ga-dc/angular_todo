"use strict";

function(){
  angular
  .module ("taskMaster", [
    "ui.router",
    "tasks"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("tasksIndex",{
      url: "/tasks",
      templateUrl: "js/tasks/index.html",
      controller: "TaskIndexController",
      controllerAs: "TaskIndexViewModel"
    });
  }


})();
