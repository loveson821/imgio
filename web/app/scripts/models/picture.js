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

    PictureModel.prototype.urlRoot = '/api/picture';

    PictureModel.prototype.idAttribute = "_id";

    PictureModel.prototype.getBasename = function(name) {
      return name.replace(/^.*\/|\.[^.]*$/g, '');
    };

    PictureModel.prototype.cutDomain = function(data) {
      data.shortlink = this.getBasename(data.shortlink);
      data.permalink = this.getBasename(data.permalink);
      this.set({
        shortlink: data.shortlink
      });
      this.set({
        permalink: data.permalink
      });
      console.log(this.toJSON());
      return data;
    };

    return PictureModel;

  })(Backbone.Model);

}).call(this);
