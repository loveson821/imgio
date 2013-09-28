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

	events:
		submit: 'signIn'
		'click a#logout': 'logout'

	render: ->
		this.$el.html this.template( this.model.toJSON() )
		return this

	signIn: (e)->
		e.preventDefault()
		creds = {}
		creds.email = $("#signIn-form input[type='email']").val()
		creds.password = $("#signIn-form input[type='password']").val()
		@model.signin creds

	addAlertBlock: (key, type)->
		$('#SignInModal').prepend alertTemplate( name: key, type: type )

	signInCallback: (user)->
		$('#SignInModal').modal 'hide'
		window.location.reload()
		
	logout: (e)->
		e.preventDefault()
		@model.logout()