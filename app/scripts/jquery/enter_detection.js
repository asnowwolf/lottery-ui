'use strict';

(function(){
  if(typeof $ !== undefined) {
    $(document).keypress(function (e) {
      if (e.keyCode === 13) {
        $(this).find('.enter_triggered').click();
      }
    });
  }
})();
