(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.RecentView = (function(_super) {
    __extends(RecentView, _super);

    function RecentView() {
      _ref = RecentView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RecentView.prototype.template = JST['app/scripts/templates/recent.ejs'];

    RecentView.prototype.events = {
      'click .more': 'loadMore'
    };

    RecentView.prototype.initialize = function(models, options) {
      this.collection.on('reset', this.render, this);
      return _.bindAll(this, 'checkScroll');
    };

    RecentView.prototype.render = function() {
      this.collection.forEach(this.addOne, this);
      Grid.init();
      return this.bindScrollbar();
    };

    RecentView.prototype.addOne = function(item) {
      var pictureView;
      pictureView = new web.Views.PictureView({
        model: item
      });
      return $('#recents-one').append(pictureView.render().el);
    };

    RecentView.prototype.loadMore = function() {
      return this.collection.loadMore(50);
    };

    RecentView.prototype.renderFrame = function() {
      this.$el.html(this.template());
      return this;
    };

    RecentView.prototype.checkScroll = function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        this.unbindScrollbar();
        return this.loadMore();
      }
    };

    RecentView.prototype.bindScrollbar = function() {
      this.unbindScrollbar();
      return $(window).scroll(this.checkScroll);
    };

    RecentView.prototype.unbindScrollbar = function() {
      return $(window).unbind('scroll');
    };

    RecentView.prototype.clean = function() {
      return this.$el.empty();
    };

    return RecentView;

  })(Backbone.View);

}).call(this);
