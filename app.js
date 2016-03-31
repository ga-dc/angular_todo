  'use strict';
  (function(){
    angular
    .module("task",[])
    .controller("taskController", ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.task = [
      {text: "eat lunch"}
    ];

  };

  vm.create = function(){
    console.log("hello");
    vm.tasks.push({text: vm.new_task});
    vm.new_task = "";
  };


  vm.edit = function(task){
    console.log(task);
    task.isediting = true;
  };
});


})();
