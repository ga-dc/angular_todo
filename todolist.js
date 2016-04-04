
var app = angular.module("app1" , []);

app.controller("ctrl1" , function(){

  var vm = this;
  vm.data = data;


  vm.new_list_item = {};

  vm.create = function(){
    vm.data.push(angular.copy(vm.new_list_item));
    vm.new_lists_item = {};
    $(".clear").val('');
  };

  vm.delete = function(deleteitem){

    console.log(deleteitem);
    var index = data.indexOf(deleteitem);
    console.log(index);
    data.splice(index , 1);
  };

  vm.edit = function(edit){
    console.log(edit);

    $("#edit").show("fast");
    vm.editdone = function(){
      var editname = $("#editname").val();
      var editnotes = $("#editnotes").val();

        if(editname === '' || editnotes === ''){
          alert("add values");
          return;
        }
        edit.Errand = editname;
        edit.Notes = editnotes;
        $(".clear").val('');
          $("#edit").hide("fast");
        return edit;

    };

};


});
