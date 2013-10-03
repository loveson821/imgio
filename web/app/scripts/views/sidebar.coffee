'use strict';

class web.Views.SidebarView extends Backbone.View
	template: JST['app/scripts/templates/sidebar.ejs']

	events:
		'click .icon-search': 'loadSearchPage'
		'click .icon-logo': 'loadHomePage'
		submit: 'shareImage'

	initialize: ->
		@ptButton = $('#pt-button')
		console.log  'no pt-button' if not @ptButton

		@pictureModel = null

	render: ->
		this.$el.html this.template()

	loadSearchPage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['search']
		web.WebRouter.clean()

	loadHomePage: (e)->
		e.preventDefault()
		@ptButton.trigger 'click', ['home']
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