
(function(){
angular
.module('todo',[
  "ui.router"
])
.config([
  '$stateProvider',
  RouterFunction
]);
  function RouterFunction($stateProvider){
  $stateProvider
  .state("todoIndex",{
    url:"/todos",
    templateUrl:"js/todos/index.html",
    controller:"TodoIndexController",
    controllerAs: "TodoIndexViewModel"
  })
  .state("todoNew", {
   url: "/todos/new",
   templateUrl: "js/todos/new.html",
   controller: "TodoNewController",
   controllerAs: "TodoNewViewModel"
 })
 .state("todoShow", {
      url: "/grumbles/:id",
      templateUrl: "js/todos/show.html",
      controller: "TodoShowController",
      controllerAs: "TodoShowViewModel"
    });
  })

})();
