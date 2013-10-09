(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Routers.WebRouter = (function(_super) {
    __extends(WebRouter, _super);

    function WebRouter() {
      _ref = WebRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WebRouter.prototype.routes = {
      "": "index",
      "hotest": "hotest",
      "recent": "recent"
    };

    WebRouter.prototype.initialize = function() {
      this.sessionModel = new web.Models.SessionModel;
      this.sidebar = new web.Views.SidebarView({
        model: this.sessionModel,
        el: $('#sidebar')
      });
      this.recentList = new web.Collections.PictureCollection([], {
        url: '/api/recent'
      });
      this.recentListView = new web.Views.PicturesView({
        collection: this.recentList,
        el: $('#recents-tpl'),
        name: 'recents'
      });
      this.hotestList = new web.Collections.PictureCollection([], {
        url: '/api/hotest'
      });
      this.hotestListView = new web.Views.PicturesView({
        collection: this.hotestList,
        el: $('#hotests-tpl'),
        name: 'hotests'
      });
      this.signUpPanel = new web.Views.SignupView({
        model: this.sessionModel,
        el: $('#signUpPanel')
      });
      this.signinmodalView = new web.Views.SigninmodalView({
        model: this.sessionModel,
        el: $('#signInModal-tpl')
      });
      this.navgitor = new web.Views.NavigatorView({
        model: this.sessionModel,
        el: $('#tobe-nav')
      });
      this.searchList = new web.Collections.SearchCollection([], {
        url: '/api/search'
      });
      this.searchPage = new web.Views.SearchView({
        collection: this.searchList,
        el: $('#search-tpl')
      });
      return this.tobeClean = [this.searchPage, this.navgitor];
    };

    WebRouter.prototype.always = function() {
      this.sidebar.render();
      this.navgitor.render();
      this.signinmodalView.render();
      if (this.sessionModel.auth()) {
        this.signUpPanel.$el.hide();
      } else {
        this.signUpPanel.render();
      }
      this.searchPage.renderFrame();
      if (this.sessionModel.isAdmin()) {
        this.adminPanel = new web.Views.AdminpanelView({
          collection: this.searchList,
          el: $('#adminSearch-tpl')
        });
        this.adminPanel.renderFrame();
        return this.tobeClean.push(this.adminPanel);
      }
    };

    WebRouter.prototype.index = function() {
      this.always();
      this.recentListView.renderFrame();
      this.hotestListView.renderFrame();
      this.recentList.fetch({
        reset: true
      });
      this.hotestList.fetch({
        reset: true
      });
      return $(window).scrollTop(0);
    };

    WebRouter.prototype.start = function() {
      return Backbone.history.start({
        pushState: true
      });
    };

    WebRouter.prototype.hotest = function() {
      this.clean();
      return this.navgitor.loadHotestPageCore();
    };

    WebRouter.prototype.recent = function() {
      this.clean();
      return this.navgitor.loadRecentPageCore();
    };

    WebRouter.prototype.clean = function() {
      return _.each(this.tobeClean, function(view) {
        return view.clean();
      });
    };

    return WebRouter;

  })(Backbone.Router);

}).call(this);
