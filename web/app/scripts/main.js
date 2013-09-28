(function() {
  window.web = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      'use strict';
      var hotestList, hotestListView, navgitor, recentList, recentListView, searchList, searchPage, sessionModel, sidebar, signUpPanel;
      console.log('Hello from Backbone!');
      sidebar = new this.Views.SidebarView({
        el: $('#sidebar')
      });
      sidebar.render();
      recentList = new this.Collections.PictureCollection([], {
        url: '/api/recent'
      });
      recentListView = new this.Views.PicturesView({
        collection: recentList,
        el: $('#recents-tpl'),
        name: 'recents'
      });
      hotestList = new this.Collections.PictureCollection([], {
        url: '/api/hotest'
      });
      hotestListView = new this.Views.PicturesView({
        collection: hotestList,
        el: $('#hotests-tpl'),
        name: 'hotests'
      });
      recentListView.renderFrame();
      hotestListView.renderFrame();
      recentList.fetch({
        reset: true
      });
      hotestList.fetch({
        reset: true
      });
      sessionModel = new this.Models.SessionModel;
      signUpPanel = new this.Views.SignupView({
        model: sessionModel,
        el: $('#signUpPanel')
      });
      if (sessionModel.auth()) {
        signUpPanel.$el.hide();
      } else {
        signUpPanel.render();
      }
      navgitor = new this.Views.NavigatorView({
        model: sessionModel,
        el: $('#tobe-nav')
      });
      navgitor.render();
      searchList = new this.Collections.SearchCollection([], {
        url: '/api/search'
      });
      searchPage = new this.Views.SearchView({
        collection: searchList,
        el: $('#search-tpl')
      });
      return searchPage.renderFrame();
    }
  };

  $(function() {
    'use strict';
    web.domain = 'http://stallket.com/';
    return web.init();
  });

}).call(this);
