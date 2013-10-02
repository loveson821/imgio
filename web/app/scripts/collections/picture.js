(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Collections.PictureCollection = (function(_super) {
    __extends(PictureCollection, _super);

    function PictureCollection() {
      _ref = PictureCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PictureCollection.prototype.model = web.Models.PictureModel;

    PictureCollection.prototype.initialize = function(models, options) {
      this.page = 1;
      return this.count = 10;
    };

    PictureCollection.prototype.parse = function(response) {
      return response;
    };

    PictureCollection.prototype.loadMore = function(count) {
      this.page = this.page + 1;
      return this.fetch({
        reset: true,
        data: {
          page: this.page,
          count: count
        }
      });
    };

    return PictureCollection;

  })(Backbone.Collection);

}).call(this);
