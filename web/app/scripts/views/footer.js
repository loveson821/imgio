(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.FooterView = (function(_super) {
    __extends(FooterView, _super);

    function FooterView() {
      _ref = FooterView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return FooterView;

  })(Backbone.View);

}).call(this);
