(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.ClipboardView = (function(_super) {
    __extends(ClipboardView, _super);

    function ClipboardView() {
      _ref = ClipboardView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClipboardView.prototype.template = JST['app/scripts/templates/clipboard.ejs'];

    ClipboardView.prototype.el = $('#clipboard');

    ClipboardView.prototype.render = function() {
      var attributes, that;
      that = this;
      attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      this.clip = new ZeroClipboard($('#a-short-link'), {
        moviePath: "scripts/ZeroClipboard.swf"
      });
      this.clip.on("dataRequested", function(client, args) {
        return client.setText(args.text);
      });
      this.clip.on('mousedown', function(client, args) {
        that.close();
        return new web.Views.AlertView({
          alert: 'success',
          fixed: true,
          title: 'Copied!!',
          message: 'Ctrl + v to paste'
        }).flash();
      });
      this.clip.on('mouseover', function(client, args) {
        return $(this).find('.copy-overlay').css('opacity', '1');
      });
      this.clip.on('mouseout', function(client, args) {
        return $(this).find('.copy-overlay').css('opacity', '0');
      });
      this.clip1 = new ZeroClipboard($('#a-blog-fourm'), {
        moviePath: "scripts/ZeroClipboard.swf"
      });
      return this.clip2 = new ZeroClipboard($('#a-html-tag'), {
        moviePath: "scripts/ZeroClipboard.swf"
      });
    };

    ClipboardView.prototype.setModel = function(model) {
      return this.model = model;
    };

    ClipboardView.prototype.show = function() {
      this.render();
      return $("#clipboardModal").modal('show');
    };

    ClipboardView.prototype.close = function() {
      return $("#clipboardModal").modal('hide');
    };

    return ClipboardView;

  })(Backbone.View);

}).call(this);
