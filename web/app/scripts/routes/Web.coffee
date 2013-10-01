'use strict';

class web.Routers.WebRouter extends Backbone.Router
	routes:
    "": "index",
    "featured": "featured"

  initialize: ->
    @sidebar = new web.Views.SidebarView el: $('#sidebar')

    @recentList = new web.Collections.PictureCollection [], url: '/api/recent'
    @recentListView = new web.Views.PicturesView collection: @recentList, el: $('#recents-tpl'), name: 'recents'

    @hotestList = new web.Collections.PictureCollection [], url: '/api/hotest'
    @hotestListView = new web.Views.PicturesView collection: @hotestList, el: $('#hotests-tpl'), name: 'hotests'

    @sessionModel = new web.Models.SessionModel
    @signUpPanel = new web.Views.SignupView model: @sessionModel, el: $('#signUpPanel')

    @navgitor = new web.Views.NavigatorView model: @sessionModel, el: $('#tobe-nav')

    @searchList = new web.Collections.SearchCollection [], url: '/api/search'
    @searchPage = new web.Views.SearchView collection: @searchList, el: $('#search-tpl')

  always: ->
    @sidebar.render()
    @navgitor.render()

    if @sessionModel.auth()
      @signUpPanel.$el.hide()
    else
      @signUpPanel.render()

    @searchPage.renderFrame()

  index: ->
    @always()

    @recentListView.renderFrame()
    @hotestListView.renderFrame()
    
    @recentList.fetch reset: yes
    @hotestList.fetch reset: yes


  start: ->
    Backbone.history.start pushState: true

  featured: ->
    @navgitor.selectMenuItem 'featured-menu'
    @recentListView.clear()
    
