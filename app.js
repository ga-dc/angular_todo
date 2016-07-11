
"use strict";

(function(){
    angular
        .module("task", [])
        .controller("taskController", TaskController)

        function TaskController () {
            var vm = this;
            vm.data = taskList;
            vm.addTask = function (subject, description) {
                var newtask = {
                    subject: subject,
                    description: description,
                };
                vm.data.push(newtask);
            }
        }
})();
