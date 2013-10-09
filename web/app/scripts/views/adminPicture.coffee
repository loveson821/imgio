'use strict';

class web.Views.AdminpictureView extends Backbone.View
	tagName: 'li'
	template: JST['app/scripts/templates/adminPicture.ejs']

	events:
		'click .btn-info': 'save'
		'click .btn-danger': 'delete'
		'change input': 'inputchange'

	render: ->
		that = this
		attributes = @model.toJSON()
		this.$el.html this.template({pic: attributes})

		return this

	inputchange: (e)->
		name = $(e.target).attr('name')
		val = $(e.target).val()
		@model.set name, val 

	save: (e)->
		e.preventDefault()
		# alert @model.toJSON().permalink
		# alert @$el.find('form input[name="permalink"]').val()
		console.log @model
		@model.save {},
		    success: (model, response) ->
		      alert('success')
		    error: (model, response) ->
		      alert('failed')
		      console.log response

	delete: (e)->
		e.preventDefault()
		self = this
		r = confirm("認真要 DEL!?!?");
		if r is yes
			@model.destroy 
				success: (model, response) ->
			      self.el.remove()
			    error: (model, response) ->
			      alert('failed')