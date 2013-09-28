(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.SearchView = (function(_super) {
    __extends(SearchView, _super);

    function SearchView() {
      _ref = SearchView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SearchView.prototype.template = JST['app/scripts/templates/search.ejs'];

    SearchView.prototype.events = {
      'click .more': 'loadMore',
      'change input#searchInput': 'findWord'
    };

    SearchView.prototype.initialize = function(models, options) {
      return this.collection.on('reset', this.render, this);
    };

    SearchView.prototype.render = function() {
      return this.collection.forEach(this.addOne, this);
    };

    SearchView.prototype.addOne = function(item) {
      var pictureView;
      pictureView = new web.Views.PictureView({
        model: item
      });
      return $('#searchs').prepend(pictureView.render().el);
    };

    SearchView.prototype.loadMore = function() {
      return this.collection.loadMore();
    };

    SearchView.prototype.renderFrame = function() {
      this.$el.html(this.template());
      return this;
    };

    SearchView.prototype.findWord = function() {
      return this.collection.findWord($('input#searchInput').val());
    };

    return SearchView;

  })(Backbone.View);

}).call(this);
