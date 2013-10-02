'use strict';

class web.Views.NavigatorView extends Backbone.View

	template: JST['app/scripts/templates/navigator.ejs']
	
	alertTemplate = _.template(
		"""
		<div class="alert alert-danger"><%= name %>!! <%= type %></div>
		"""
		)

	initialize: ->
		@model.on 'signin-alert', @addAlertBlock, this
		@model.on 'signin-success', @signInCallback, this
		@model.on 'logout', @render, this

		@recentList = new web.Collections.PictureCollection [], url: '/api/recent'
		@recentView = new web.Views.RecentView collection: @recentList, el: $("#recents-one-tpl")
		

		@hotestList = new web.Collections.PictureCollection [], url: '/api/hotest'
		@hotestView = new web.Views.HotestView collection: @hotestList, el: $('#hotests-one-tpl')
		

	events:
		# 'submit #SignInModal': 'signIn'
		'click a#logout': 'logout'
		'click li.recent-menu': 'loadRecentPage'
		'click li.hotest-menu': 'loadHotestPage'

	render: ->
		this.$el.html this.template( this.model.toJSON() )
		return this


	addAlertBlock: (key, type)->
		$('#SignInModal').prepend alertTemplate( name: key, type: type )

	signInCallback: (user)->
		$('#SignInModal').modal 'hide'
		window.location.reload()
		
	logout: (e)->
		e.preventDefault()
		@model.logout()

	selectMenuItem: (menuItem) ->
	    $(".nav li").removeClass "active"
	    $("." + menuItem).addClass "active"  if menuItem

	loadRecentPage: (e)->
		e.preventDefault()
		@loadRecentPageCore()

	loadRecentPageCore: ->
		@recentView.renderFrame()
		@recentList.fetch reset: yes, data:{ count: 50}
		$('#pt-button').trigger 'click', ['recent']


	loadHotestPage: (e)->
		e.preventDefault()
		@loadHotestPageCore()

	loadHotestPageCore: ->
		@hotestView.renderFrame()
		@hotestList.fetch reset: yes, data:{ count: 50}
		$('#pt-button').trigger 'click', ['hotest']


