'use strict';

class web.Views.SidebarView extends Backbone.View
	template: JST['app/scripts/templates/sidebar.ejs']

	events:
		'click .icon-search': 'loadSearchPage'
		'click .icon-logo': 'loadHomePage'
		'click .icon-heart': 'loadHotestPage'
		'click .icon-rocket': 'loadRecentPage'
		# 'click .icon-share-alt': 'preShareModal'
		submit: 'shareImage'

	initialize: ->
		@ptButton = $('#pt-button')
		console.log  'no pt-button' if not @ptButton

		@pictureModel = null

	render: ->
		this.$el.html this.template()
		$("[rel='tooltip']").tooltip()

	selectMenuItem: (menuItem) ->
	    $("[rel='tooltip']").removeClass "active"
	    $("." + menuItem).addClass "active"  if menuItem

	# preShareModal: (e)->
	# 	e.preventDefault()
	# 	@selectMenuItem 'icon-share-alt'

	loadSearchPage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['search']
		@selectMenuItem 'icon-search'
		web.WebRouter.clean()

	loadHomePage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['home']
		web.WebRouter.clean()

	loadRecentPage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['recent']
		@selectMenuItem 'icon-rocket'
		web.WebRouter.clean()

	loadHotestPage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['hotest']
		@selectMenuItem 'icon-heart'
		web.WebRouter.clean()

	shareImage: (e)->
		e.preventDefault()
		console.log @model.auth()
		if not @model.auth()
			$('#shareModal').modal 'hide'
			new web.Views.AlertView(
			  		alert: 'danger'
			  		fixed: true
			  		title: '!!'
			  		message: 'Please login first'
			  	).flash()
		else
			body = {}
			body.path = $("#shareImageURL").val()
			body.name = $('#shareImageName').val()
			@pictureModel = new web.Models.PictureModel if not @pictureModel

			@pictureModel.save body,
				success: (model, response, options)->
					$('#shareModal').modal 'hide'
					new web.Views.AlertView(
				  		alert: 'success'
				  		fixed: true
				  		title: '!!'
				  		message: 'Shared image '+body.name
				  	).flash()