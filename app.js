var myApp = angular.module('app.js', []);

myApp.controller('Todoist', ['$scope', function($scope) {
    $scope.editTodo = "changed todo";
    $scope.todo = 'very';

    $scope.todo = function(todo) {
        $scope.todo = todo;
    };
}]);
