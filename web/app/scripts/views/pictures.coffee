'use strict';

class web.Views.PicturesView extends Backbone.View

	template: JST['app/scripts/templates/pictures.ejs']

	defaults:
		name: null

	events: 
		'click .more': 'loadMore'

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