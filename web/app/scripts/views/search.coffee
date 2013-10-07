'use strict';

class web.Views.SearchView extends Backbone.View

	template: JST['app/scripts/templates/search.ejs']

	events: 
		'click .more': 'loadMore'
		'change input#searchInput': 'findWord'

	initialize: (models, options)->
		@collection.on 'reset', @render, this
		@collection.on 'more', @appendMore, this
		_.bindAll @, 'checkScroll'

	render: ->
		@appendMore()

	appendMore: ->
		@collection.forEach @addOne, this
		Grid.init()
		@bindScrollbar()


	addOne: (item)->
		pictureView = new web.Views.PictureView model: item
		$('#searchs').append pictureView.render().el

	loadMore: ->
		this.collection.loadMore()

	renderFrame: ->
		this.$el.html this.template()
		return this

	findWord: ->
		@clean()
		@collection.findWord $('input#searchInput').val()

	checkScroll: ->
		if $(window).scrollTop() + $(window).height() > $(document).height() - 300
			@unbindScrollbar()
			@loadMore()
			console.log 'here'


	bindScrollbar: ->
		@unbindScrollbar()
		$(window).scroll @checkScroll

	unbindScrollbar: ->
		$(window).unbind 'scroll'

	clean: ->
		$('#searchs').empty()
		# @$el.empty()
