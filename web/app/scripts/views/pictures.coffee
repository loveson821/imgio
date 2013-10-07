'use strict';

class web.Views.PicturesView extends Backbone.View

	template: JST['app/scripts/templates/pictures.ejs']

	defaults:
		name: null

	events: 
		'click #recent-more': 'loadRecentPage'
		'click #hotest-more': 'loadHotestPage'
 
	selectMenuItem: (menuItem) ->
	    $("[rel='tooltip']").removeClass "active"
	    $("." + menuItem).addClass "active"  if menuItem

	loadRecentPage: (e)->
		console.log "fuck"
		@selectMenuItem 'icon-rocket'

	loadHotestPage: (e)->
		console.log "fuck"
		@selectMenuItem 'icon-heart'
		

	initialize: (models, options)->
		@name = models.name
		@collection.on 'reset', @render, this

	render: ->
		@collection.forEach @addOne, this
		Grid.init()

	addOne: (item)->
		pictureView = new web.Views.PictureView model: item
		$('#'+@name).append pictureView.render().el

	renderFrame: ->
		this.$el.html this.template( name: @name )
		return this

	loadMore: ->
		this.collection.loadMore()

	clear: ->
		@$el.html ''