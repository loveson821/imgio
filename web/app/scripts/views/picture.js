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
      return this;
    };

    PictureView.prototype.imgClick = function(e) {
      e.preventDefault();
      web.clipboard.setModel(this.model);
      web.clipboard.render();
      return web.clipboard.show();
    };

    return PictureView;

  })(Backbone.View);

}).call(this);
