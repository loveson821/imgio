(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.SidebarView = (function(_super) {
    __extends(SidebarView, _super);

    function SidebarView() {
      _ref = SidebarView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SidebarView.prototype.template = JST['app/scripts/templates/sidebar.ejs'];

    SidebarView.prototype.events = {
      'click .icon-search': 'loadSearchPage'
    };

    SidebarView.prototype.render = function() {
      return this.$el.html(this.template());
    };

    SidebarView.prototype.loadSearchPage = function(e) {
      var ptButton;
      e.preventDefault();
      ptButton = $('#pt-button');
      if (ptButton) {
        return ptButton.trigger('click', ['test param']);
      } else {
        return alert('loadSearchPage');
      }
    };

    return SidebarView;

  })(Backbone.View);

}).call(this);
