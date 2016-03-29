"use strict";

(function(){
  angular
  .module("toDoList", [])
  .controller("toDoList_controller", ToDoListController);

  function ToDoListController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(priority){
      vm.sort_on = priority;
      vm.is_descending = !(vm.is_descending);
    }
    vm.total_time = function(){
      var total = 0;
      vm.data.forEach(function(task){
        if(task.ettc){
          total += task.ettc;
        }
      });
      var hours = Math.floor(total / 60);
      var minutes = total % 60;
      minutes = (minutes < 10 ? '0' : '') + minutes;
      return hours + ":" + minutes;
    }
    vm.modify = function(task){
      var index = vm.data.indexOf(task);
      vm.data[index].edit = true;
    };
    vm.update = function(task){
      var index = vm.data.indexOf(task);
      vm.data[index].edit = false;
    };
    vm.destroy = function(task){
      var index = vm.data.indexOf(task);
      vm.data.splice(index, 1);
    }
    vm.new_task = {edit: false};
    vm.create = function(){
      vm.data.push(angular.copy(vm.new_task));
      vm.new_task = {};
    }
  }
})();


var app = angular.module('addApp', []);

app.controller('modifyCtrl', ['$scope', function($scope){
    $scope.vm.data= [
        {'name':'rohit', 'dob':'15-august-1985', 'emailId':'rohit@rohit.com', 'phone':'9999999999', 'address':'Delhi Rohini', 'id':'0' },
        {'name':'aman', 'dob':'26-july-1975', 'emailId':'haryanat@hr.com', 'phone':'9874563210', 'address':'Haryana Sonepat', 'id':'1' },
        {'name':'devraj', 'dob':'27-march-1980', 'emailId':'punjab@punjab.com', 'phone':'7410258963', 'address':'Punjab AmritSar', 'id':'2' }
    ];



}]);
