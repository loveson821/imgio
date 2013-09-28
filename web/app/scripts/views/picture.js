(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.PictureView = (function(_super) {
    __extends(PictureView, _super);

    function PictureView() {
      _ref = PictureView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PictureView.prototype.tagName = 'li';

    PictureView.prototype.template = JST['app/scripts/templates/picture.ejs'];

    PictureView.prototype.events = {
      'click img': 'imgClick'
    };

    PictureView.prototype.render = function() {
      var attributes, that;
      that = this;
      attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      this.clip = new ZeroClipboard(this.$('a'), {
        moviePath: "scripts/ZeroClipboard.swf",
        forceHandCursor: true
      });
      this.clip.on("dataRequested", function(client, args) {
        return client.setText(args.text);
      });
      this.clip.on('mousedown', function(client, args) {
        return that.clipmousedown();
      });
      return this;
    };

    PictureView.prototype.imgClick = function(e) {
      e.preventDefault();
      return alert('Please install flash for copy the link');
    };

    PictureView.prototype.clipmousedown = function() {
      return new web.Views.AlertView({
        alert: 'info',
        fixed: true,
        title: 'Copied!!',
        message: 'pasted to clipboard'
      }).flash();
    };

    return PictureView;

  })(Backbone.View);

}).call(this);
