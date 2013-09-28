'use strict';

class web.Views.SidebarView extends Backbone.View
	template: JST['app/scripts/templates/sidebar.ejs']

	events:
		'click .icon-search': 'loadSearchPage'

	render: ->
		this.$el.html this.template()

	loadSearchPage: (e)->
		e.preventDefault()
		ptButton = $('#pt-button')
		if ptButton
			ptButton.trigger 'click', ['test param']
		else
			alert 'loadSearchPage'

