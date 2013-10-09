(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.AdminpanelView = (function(_super) {
    __extends(AdminpanelView, _super);

    function AdminpanelView() {
      _ref = AdminpanelView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AdminpanelView.prototype.template = JST['app/scripts/templates/adminPanel.ejs'];

    AdminpanelView.prototype.events = {
      'click .more': 'loadMore',
      'change input#adminSearchInput': 'findWord'
    };

    AdminpanelView.prototype.initialize = function(models, options) {
      this.collection.on('reset', this.render, this);
      this.collection.on('more', this.appendMore, this);
      return _.bindAll(this, 'checkScroll');
    };

    AdminpanelView.prototype.render = function() {
      return this.appendMore();
    };

    AdminpanelView.prototype.appendMore = function() {
      this.collection.forEach(this.addOne, this);
      Grid.init();
      return this.bindScrollbar();
    };

    AdminpanelView.prototype.addOne = function(item) {
      var pictureView;
      pictureView = new web.Views.PictureView({
        model: item
      });
      return $('#adminSearch').append(pictureView.render().el);
    };

    AdminpanelView.prototype.loadMore = function() {
      return this.collection.loadMore();
    };

    AdminpanelView.prototype.renderFrame = function() {
      this.$el.html(this.template());
      return this;
    };

    AdminpanelView.prototype.findWord = function() {
      this.clean();
      return this.collection.findWord($('input#adminSearchInput').val());
    };

    AdminpanelView.prototype.checkScroll = function() {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        this.unbindScrollbar();
        return this.loadMore();
      }
    };

    AdminpanelView.prototype.bindScrollbar = function() {
      this.unbindScrollbar();
      return $(window).scroll(this.checkScroll);
    };

    AdminpanelView.prototype.unbindScrollbar = function() {
      return $(window).unbind('scroll');
    };

    AdminpanelView.prototype.clean = function() {
      return $('#adminSearch').empty();
    };

    return AdminpanelView;

  })(Backbone.View);

}).call(this);
