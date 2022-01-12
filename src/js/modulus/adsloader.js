var Class_adLoader = {
  // Initialize moreResult
  // -----------------------------------------------------------------------------------
  init: function () {
    var that = this;
    setTimeout(function () {
      that.attachEvents();
    }, 500);
    return this;
  },

  // append Data
  // -----------------------------------------------------------------------------------
  attachEvents: function () {
    // <div class="col-xs-12 ads-container" data-tbg-container="${settings.advertisement.homepage.above_fold}"></div>
    $("[data-tbg-container]").each(function (index) {
      var tbgUrl = $(this).data("tbg-container"),
        randomid = "tbgId" + index;
      $(this).attr("id", randomid);
      postscribe("#" + randomid, '<script src="' + tbgUrl + '"></script>');
    });
  },
};
$(document).ready(function () {
  window.adLoader = new (function () {
    $.extend(true, this, Class_adLoader);
    return this.init();
  })();
});
