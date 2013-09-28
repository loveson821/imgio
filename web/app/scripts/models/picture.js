(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Models.PictureModel = (function(_super) {
    __extends(PictureModel, _super);

    function PictureModel() {
      _ref = PictureModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return PictureModel;

  })(Backbone.Model);

}).call(this);
