angular.module('Todo', [])
       .controller('TodoController', function() {
         var vm = this;
         vm.newTodo = '';
         vm.editTodo = '';
         vm.todos = [
            "Grocery shop",
            "Return library book",
            "Pay electric bill",
            "Make doctor appointment"
            ];
          vm.delete = function(todo) {
            var indexOf = vm.todos.indexOf(todo);
                vm.todos.splice(indexOf, 1);
            };

          vm.edit = function(todo) {
            var indexOf = vm.todos.indexOf(todo);
                vm.todos.splice(indexOf, 1);
                vm.todos.splice(indexOf, 0, vm.editTodo);
            };



          vm.add = function(e) {
             if (e.which && e.which === 13) {
               vm.todos.push(vm.newTodo);
               vm.newTodo = '';
             }
           };



          });
