'use strict';

class web.Views.AdminpanelView extends Backbone.View

	template: JST['app/scripts/templates/adminPanel.ejs']

	events: 
		'click .more': 'loadMore'
		'change input#adminSearchInput': 'findWord'

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
		pictureView = new web.Views.AdminpictureView model: item
		$('#adminSearch').append pictureView.render().el

	loadMore: ->
		this.collection.loadMore()

	renderFrame: ->
		this.$el.html this.template()
		return this

	findWord: ->
		@clean()
		@collection.findWord $('input#adminSearchInput').val()

	checkScroll: ->
		if $(window).scrollTop() + $(window).height() > $(document).height() - 300
			@unbindScrollbar()
			@loadMore()


	bindScrollbar: ->
		@unbindScrollbar()
		$(window).scroll @checkScroll

	unbindScrollbar: ->
		$(window).unbind 'scroll'

	clean: ->
		$('#adminSearch').empty()