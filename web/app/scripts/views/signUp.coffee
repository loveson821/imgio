'use strict';

class web.Views.SignupView extends Backbone.View
	self = this
	template: JST['app/scripts/templates/signUp.ejs']

	alertTemplate = _.template(
		"""
		<div class="alert alert-danger"><%= name %>!! <%= type %></div>
		"""
		)
	initialize: ->
		@model.on 'validation-alert', @addAlertBlock, this
		@model.on 'signin-success', @signInCallback, this
		@model.on 'logout', @logoutCallback, this

	events:
		submit: 'regist'

	render: ->
		this.$el.html this.template()
		return this

	regist: (e)->
		e.preventDefault()
		creds = {}
		creds.email = this.$('input#email').val()
		creds.password = this.$('input#password').val()
		creds.username = this.$('input#username').val()
		@model.signup creds

	addAlertBlock: (key, type)->
		@$el.prepend alertTemplate( name: key, type: type )

	signInCallback: (user)->
		@$el.hide()

	logoutCallback: ->
		@render()
		@$el.show()
		