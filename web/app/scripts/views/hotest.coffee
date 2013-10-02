'use strict';

class web.Views.HotestView extends Backbone.View
	template: JST['app/scripts/templates/hotest.ejs']

	events: 
		'click .more': 'loadMore'

	initialize: (models, options)->
		@collection.on 'reset', @render, this
		_.bindAll @, 'checkScroll'

	render: ->
		@collection.forEach @addOne, this
		Grid.init()
		@bindScrollbar()

	addOne: (item)->
		pictureView = new web.Views.PictureView model: item
		$('#hotests-one').append pictureView.render().el

	loadMore: ->
		this.collection.loadMore 50

	renderFrame: ->
		this.$el.html this.template()
		return this

	checkScroll: ->
		if $(window).scrollTop() + $(window).height() > $(document).height() - 50
			@unbindScrollbar()
			@loadMore()


	bindScrollbar: ->
		@unbindScrollbar()
		$(window).scroll @checkScroll

	unbindScrollbar: ->
		$(window).unbind 'scroll'