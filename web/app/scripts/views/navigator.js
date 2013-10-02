(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.NavigatorView = (function(_super) {
    var alertTemplate;

    __extends(NavigatorView, _super);

    function NavigatorView() {
      _ref = NavigatorView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NavigatorView.prototype.template = JST['app/scripts/templates/navigator.ejs'];

    alertTemplate = _.template("<div class=\"alert alert-danger\"><%= name %>!! <%= type %></div>");

    NavigatorView.prototype.initialize = function() {
      this.model.on('signin-alert', this.addAlertBlock, this);
      this.model.on('signin-success', this.signInCallback, this);
      this.model.on('logout', this.render, this);
      this.recentList = new web.Collections.PictureCollection([], {
        url: '/api/recent'
      });
      this.recentView = new web.Views.RecentView({
        collection: this.recentList,
        el: $("#recents-one-tpl")
      });
      this.hotestList = new web.Collections.PictureCollection([], {
        url: '/api/hotest'
      });
      return this.hotestView = new web.Views.HotestView({
        collection: this.hotestList,
        el: $('#hotests-one-tpl')
      });
    };

    NavigatorView.prototype.events = {
      'click a#logout': 'logout',
      'click li.recent-menu': 'loadRecentPage',
      'click li.hotest-menu': 'loadHotestPage'
    };

    NavigatorView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    NavigatorView.prototype.addAlertBlock = function(key, type) {
      return $('#SignInModal').prepend(alertTemplate({
        name: key,
        type: type
      }));
    };

    NavigatorView.prototype.signInCallback = function(user) {
      $('#SignInModal').modal('hide');
      return window.location.reload();
    };

    NavigatorView.prototype.logout = function(e) {
      e.preventDefault();
      return this.model.logout();
    };

    NavigatorView.prototype.selectMenuItem = function(menuItem) {
      $(".nav li").removeClass("active");
      if (menuItem) {
        return $("." + menuItem).addClass("active");
      }
    };

    NavigatorView.prototype.loadRecentPage = function(e) {
      e.preventDefault();
      return this.loadRecentPageCore();
    };

    NavigatorView.prototype.loadRecentPageCore = function() {
      this.recentView.renderFrame();
      this.recentList.fetch({
        reset: true,
        data: {
          count: 50
        }
      });
      return $('#pt-button').trigger('click', ['recent']);
    };

    NavigatorView.prototype.loadHotestPage = function(e) {
      e.preventDefault();
      return this.loadHotestPageCore();
    };

    NavigatorView.prototype.loadHotestPageCore = function() {
      this.hotestView.renderFrame();
      this.hotestList.fetch({
        reset: true,
        data: {
          count: 50
        }
      });
      return $('#pt-button').trigger('click', ['hotest']);
    };

    return NavigatorView;

  })(Backbone.View);

}).call(this);
