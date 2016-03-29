"use strict";

//having funtion in the beginning like this is an iife its an angular convention to use it.


(function(){
angular
.module('todolist', []);
.controller('app_controller', ControllerFunction);

  function ControllerFunction(){
    var vm = this;
    vm.list = [ "eat food",
                "take shit",
                "code",
                "sleep"
              ];

})();
