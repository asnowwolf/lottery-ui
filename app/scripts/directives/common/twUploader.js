'use strict';

angular.module('app').directive('twUploader', function twUploader($parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var fn = $parse(attrs['twUploader']);
      element.on('change', function(event) {
        var file = event.target.files[0];
        if (!file) {
          return;
        }
        var reader = new FileReader();
        reader.onload = function(event) {
          scope.$apply(function() {
            fn(scope, {text: reader.result});
          });
        };
        reader.readAsText(file);
      });
    }
  };
});