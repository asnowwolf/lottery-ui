'use strict';

angular.module('app').controller('GoldenDataImportCtrl', function GoldenDataImportCtrl() {


  function getGoldenDataUrlWithFormId(formId) {
    return 'https://jinshuju.net/api/v1/forms/' + formId + '/entries';
  }
});
