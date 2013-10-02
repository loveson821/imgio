'use strict';

class web.Views.SigninmodalView extends Backbone.View
	template: JST['app/scripts/templates/signinModal.ejs']

	events:
		submit: 'signIn'

	render: ->
		this.$el.html this.template()

	signIn: (e)->
		e.preventDefault()
		creds = {}
		creds.email = $("#signIn-form input[type='email']").val()
		creds.password = $("#signIn-form input[type='password']").val()
		@model.signin creds