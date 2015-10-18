"use strict";

(function($){
  $(document).keypress(function(e) {
    if(e.keyCode === 13) {
      $(this).find('.enter_triggered').click();
    }
  });
})($);
