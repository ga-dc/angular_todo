i = index.html
a = app.js

1. i -  link to your css and your angular library/js files
2. a - create module:
  var app = angular.module('applicationName', [])
3. i - inside html tag:
<html ng-app="applicationName">
 // P.S expressions look like this:
 <h1>{{"Hello, " + "Angular!"}}</h1>//
4. a - wrap it all in an "iffe" function:
  (function(){ var app .... etc })();
5. a - add controller after module function closes:
app.controller('AppController', function(){        })
6. a - inside those { } set your data equal to a PROPERTY of your CONTROLLER:
this.propertyOfController = nameOfObjectInDataSet; 
