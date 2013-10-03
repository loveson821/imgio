(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.HotestView = (function(_super) {
    __extends(HotestView, _super);

    function HotestView() {
      _ref = HotestView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HotestView.prototype.template = JST['app/scripts/templates/hotest.ejs'];

    HotestView.prototype.events = {
      'click .more': 'loadMore'
    };

    HotestView.prototype.initialize = function(models, options) {
      this.collection.on('reset', this.render, this);
      return _.bindAll(this, 'checkScroll');
    };

    HotestView.prototype.render = function() {
      this.collection.forEach(this.addOne, this);
      Grid.init();
      return this.bindScrollbar();
    };

    HotestView.prototype.addOne = function(item) {
      var pictureView;
      pictureView = new web.Views.PictureView({
        model: item
      });
      return $('#hotests-one').append(pictureView.render().el);
    };

    HotestView.prototype.loadMore = function() {
      return this.collection.loadMore(50);
    };

    HotestView.prototype.renderFrame = function() {
      this.$el.html(this.template());
      return this;
    };

    HotestView.prototype.checkScroll = function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        this.unbindScrollbar();
        return this.loadMore();
      }
    };

    HotestView.prototype.bindScrollbar = function() {
      this.unbindScrollbar();
      return $(window).scroll(this.checkScroll);
    };

    HotestView.prototype.unbindScrollbar = function() {
      return $(window).unbind('scroll');
    };

    HotestView.prototype.clean = function() {
      return this.$el.empty();
    };

    return HotestView;

  })(Backbone.View);

}).call(this);
