'use strict';

class web.Views.SearchView extends Backbone.View

	template: JST['app/scripts/templates/search.ejs']

	events: 
		'click .more': 'loadMore'
		'change input#searchInput': 'findWord'

	initialize: (models, options)->
		@collection.on 'reset', @render, this

	render: ->
		@collection.forEach @addOne, this

	addOne: (item)->
		pictureView = new web.Views.PictureView model: item
		$('#searchs').prepend pictureView.render().el

	loadMore: ->
		this.collection.loadMore()

	renderFrame: ->
		this.$el.html this.template()
		return this

	findWord: ->
		# console.log $('input#searchInput').val()
		@collection.findWord $('input#searchInput').val()