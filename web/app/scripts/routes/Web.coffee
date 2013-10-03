'use strict';

class web.Routers.WebRouter extends Backbone.Router
	routes:
        "": "index",
        "hotest": "hotest",
        "recent": "recent"

  initialize: ->
    @sessionModel = new web.Models.SessionModel

    @sidebar = new web.Views.SidebarView model: @sessionModel, el: $('#sidebar')

    @recentList = new web.Collections.PictureCollection [], url: '/api/recent'
    @recentListView = new web.Views.PicturesView collection: @recentList, el: $('#recents-tpl'), name: 'recents'

    @hotestList = new web.Collections.PictureCollection [], url: '/api/hotest'
    @hotestListView = new web.Views.PicturesView collection: @hotestList, el: $('#hotests-tpl'), name: 'hotests'

    
    @signUpPanel = new web.Views.SignupView model: @sessionModel, el: $('#signUpPanel')
    @signinmodalView = new web.Views.SigninmodalView model: @sessionModel, el: $('#signInModal-tpl')

    @navgitor = new web.Views.NavigatorView model: @sessionModel, el: $('#tobe-nav')


    @searchList = new web.Collections.SearchCollection [], url: '/api/search'
    @searchPage = new web.Views.SearchView collection: @searchList, el: $('#search-tpl')

    @tobeClean = [@searchPage, @navgitor]

  always: ->
    
    @sidebar.render()
    @navgitor.render()
    @signinmodalView.render()

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

    $(window).scrollTop 0

    

  start: ->
    Backbone.history.start pushState: true

  hotest: ->
    @clean()
    @navgitor.loadHotestPageCore()

  recent: ->
    @clean()
    @navgitor.loadRecentPageCore()

  clean: ->
    _.each @tobeClean, (view)->
      view.clean()
    
