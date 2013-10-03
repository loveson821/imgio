(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.AlertView = (function(_super) {
    __extends(AlertView, _super);

    function AlertView() {
      _ref = AlertView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlertView.prototype.tagName = "div";

    AlertView.prototype.className = "alert fade";

    AlertView.prototype.template = _.template(["<a href=\"#\" data-dismiss=\"alert\" class=\"close\">&times;</a>", "<strong><%= title %></strong>", "<%= message %>"].join("\n"));

    AlertView.prototype.initialize = function(options) {
      if (options) {
        this.alert = options.alert || "info";
        this.title = options.title || "";
        this.message = options.message || "";
        return this.fixed = options.fixed || false;
      }
    };

    AlertView.prototype.prepare = function() {
      var output, that;
      that = this;
      output = this.template({
        title: this.title,
        message: this.message
      });
      if (this.alert) {
        this.$el.addClass('alert-' + this.alert);
      }
      if (this.fixed) {
        this.$el.addClass("fixed");
      }
      this.$el.append(output);
      return $('body').append(that.$el);
    };

    AlertView.prototype.render = function() {
      this.prepare();
      window.setTimeout((function() {
        return this.$el.addClass("in");
      }), 20);
      return this;
    };

    AlertView.prototype.remove = function() {
      var that;
      that = this;
      this.$el.removeClass("in");
      return window.setTimeout((function() {
        return that.$el.remove();
      }), 1000);
    };

    AlertView.prototype.flash = function() {
      var that;
      this.prepare();
      that = this;
      return this.$el.delay(1000).addClass("in").fadeOut(2000);
    };

    return AlertView;

  })(Backbone.View);

}).call(this);
