
"use strict";

(function(){
    angular
        .module("task", [])
        .controller("taskController", TaskController)

        function TaskController () {
            var vm = this;
            vm.data = taskList;
            vm.addTask = function (subject, description, urgency) {
                var newtask = {
                    subject: subject,
                    description: description,
                    urgency: urgency
                };
                vm.data.push(newtask);
            }
            vm.sort_data_by = function(name){
                vm.sort_on = name;
                vm.is_descending = !(vm.is_descending);
            }
            vm.destroy = function(task){
                vm.data.splice(vm.data.indexOf(task), 1);
            }
        }
})();
