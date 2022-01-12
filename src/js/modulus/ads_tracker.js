var Class_Ads_Tracker = {
  init: function() {
    return this;
  },
  sequenceToken: null,
  start: function(data) {
    this.sendRequest({
      'Event': 1,
      'AdsUrl': data.adsUrl,
      'RefId': data.videoId,
      'AdsDuration': -1
    });
  },
  timeout: function(data) {
    this.sendRequest({
      'Event': 4,
      'AdsUrl': data.adsUrl,
      'RefId': data.videoId,
      'AdsDuration': -1
    });
  },
  finished: function(data) {
    this.sendRequest({
      'Event': 3,
      'AdsUrl': data.adsUrl,
      'RefId': data.videoId,
      'AdsDuration': -1,
      'SequenceToken': this.sequenceToken
    });
  },
  skipped: function(data) {
    this.sendRequest({
      'Event': 2,
      'AdsUrl': data.adsUrl,
      'RefId': data.videoId,
      'AdsDuration': -1,
      'SequenceToken': this.sequenceToken
    });
  },
  sendRequest: function(args) {
    var self = this;
    $.ajax({
      url: 'https://slothmore-ads.farakav.com/vast?clientName=tamasha',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(args),
      success: function(data) {
        self.sequenceToken = data.sequenceToken;
      }
    });
  }
};

$(document).ready(function() {
  window.adsTracker = new function() {
    $.extend(true, this, Class_Ads_Tracker);
    return this.init();
  }();
});
