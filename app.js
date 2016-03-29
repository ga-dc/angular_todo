angular.module('Todo', [])
       .controller('TodoController', function() {
         var vm = this;
         vm.message = 'This is a message.';
         vm.newTodo = '';
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
          vm.add = function(e) {
             if (e.which && e.which === 13) {
               vm.todos.push(vm.newTodo);
               vm.newTodo = '';
             }
           };





          });
