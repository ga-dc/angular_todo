"use strict";

(function(){
  angular
  .module("list", [])
  .controller("list_controller", ListController);

  function ListController(){
    var vm = this; // replaces $scope
    // called vm for View Model because the controller takes things from the model and makes it displayable int he view. vm can be called anything, but vm makes most sense.
    vm.listItem = [
    "Bananas",
    "Apples",
    "Dog Food",
    "Avocado"
  ];

  vm.formIsVisible = false; // formIsVisible is a property of vm

  vm.toggleForm = function(){
    //this function shows and hides the form textarea for adding new items
    // the function starts on a click
    if(vm.formIsVisible){
      vm.formIsVisible=false;
    } else {
      vm.formIsVisible = true;
    }
  };

  vm.create = function(){
      vm.listItem.unshift(vm.content); // adds text written in content to beginning of listItem array
      vm.content = ""; // this clears text in the form field
    };

  vm.edit = function(index){
    var item = vm.listItem[index];
    vm.content= item; // this puts that list item's name in form field.
  }; // All edit does is place the listItem's name into the form field. I can delete this entire function and it will still work.

  vm.update = function(index){
    vm.listItem[index] = vm.content;
  };

  vm.delete = function( item ){
    var index = vm.listItem.indexOf(item); // finds index of item clicked on
    vm.listItem.splice( index , 1 ); // remove one element from index of item
  }

} // everything needs to go in list controller so list controller function is closed down here.
})();
