"use strict";

(function(){
    angular
    .module("todo", [])
    .controller("todo_controller", TodoController);

    function TodoController(){
        var vm = this;
        vm.hello = "Hello!"
        vm.data = [
            {string: "Hi there"},
            {string: "Angular is new"},
            {string: "and maybe fun?"},
            {string: "whatever."}
        ]
        vm.new_todo = {}
        vm.create = function(){
            vm.data.push(vm.new_todo)
            vm.new_todo = {};
        }
    }
})();
