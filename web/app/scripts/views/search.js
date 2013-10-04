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
      this.collection.on('reset', this.render, this);
      this.collection.on('more', this.appendMore, this);
      return _.bindAll(this, 'checkScroll');
    };

    SearchView.prototype.render = function() {
      return this.appendMore();
    };

    SearchView.prototype.appendMore = function() {
      this.collection.forEach(this.addOne, this);
      Grid.init();
      return this.bindScrollbar();
    };

    SearchView.prototype.addOne = function(item) {
      var pictureView;
      pictureView = new web.Views.PictureView({
        model: item
      });
      return $('#searchs').append(pictureView.render().el);
    };

    SearchView.prototype.loadMore = function() {
      return this.collection.loadMore();
    };

    SearchView.prototype.renderFrame = function() {
      this.$el.html(this.template());
      return this;
    };

    SearchView.prototype.findWord = function() {
      this.clean();
      return this.collection.findWord($('input#searchInput').val());
    };

    SearchView.prototype.checkScroll = function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        this.unbindScrollbar();
        this.loadMore();
        return console.log('here');
      }
    };

    SearchView.prototype.bindScrollbar = function() {
      this.unbindScrollbar();
      return $(window).scroll(this.checkScroll);
    };

    SearchView.prototype.unbindScrollbar = function() {
      return $(window).unbind('scroll');
    };

    SearchView.prototype.clean = function() {
      return $('#searchs').empty();
    };

    return SearchView;

  })(Backbone.View);

}).call(this);
