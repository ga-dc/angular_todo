"use strict";

(function(){
    angular
    .module("todo", [])
    .controller("todo_controller", TodoController);

    function TodoController(){
        var vm = this;
        vm.data = [
            {task: "Make dinner"},
            {task: "wash dishes"},
            {task: "Netflix and chill"}
        ];
        vm.new_todo = {};
        vm.create = function(){
            vm.data.push(vm.new_todo);
            vm.new_todo = {};
        };

        vm.edit = function(index, item){
            vm.data[index] = item.edit_todo;
        };

        vm.delete = function(text){
            var index = vm.data.indexOf(text);
            vm.data.splice(index, 1);
        };
    }
})();
