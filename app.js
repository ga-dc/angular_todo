
(function() {
  var app = angular.module("todo", []);

  app.controller("TodoController", function() {
    this.items = [];

    this.addItem = function() {
      this.items.push(this.item);
      this.item = "";
    };

    this.delete = function(index) {
      this.items.splice(index, 1);
    };

    this.isHidden = true;


    this.edit = function(index) {
      this.items[index] = this.item;
      this.isHidden = true;
      this.item= "";
    }

  });


})();
