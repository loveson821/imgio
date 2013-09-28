window.web =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'
    console.log 'Hello from Backbone!'

    sidebar = new @Views.SidebarView el: $('#sidebar')
    sidebar.render()

    recentList = new @Collections.PictureCollection [], url: '/api/recent'
    recentListView = new @Views.PicturesView collection: recentList, el: $('#recents-tpl'), name: 'recents'

    hotestList = new @Collections.PictureCollection [], url: '/api/hotest'
    hotestListView = new @Views.PicturesView collection: hotestList, el: $('#hotests-tpl'), name: 'hotests'

    recentListView.renderFrame()
    hotestListView.renderFrame()
    
    recentList.fetch reset: yes
    hotestList.fetch reset: yes

    sessionModel = new @Models.SessionModel

    signUpPanel = new @Views.SignupView model: sessionModel, el: $('#signUpPanel')
    if sessionModel.auth()
      signUpPanel.$el.hide()
    else
      signUpPanel.render()

    navgitor = new @Views.NavigatorView model: sessionModel, el: $('#tobe-nav')
    navgitor.render()


    searchList = new @Collections.SearchCollection [], url: '/api/search'
    searchPage = new @Views.SearchView collection: searchList, el: $('#search-tpl')
    searchPage.renderFrame()
    

$ ->
  'use strict'
  web.domain = 'http://stallket.com/'
  web.init();
