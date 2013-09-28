'use strict';

class web.Views.PictureView extends Backbone.View

	tagName: 'li'
	template: JST['app/scripts/templates/picture.ejs']

	events:
		'click img': 'imgClick'

	render: ->
		that = this
		attributes = this.model.toJSON()
		# console.log attributes.permalink if attributes.permalink
		# console.log attributes.name if not attributes.permalink
		# attributes.permalink = web.domain + permalink
		this.$el.html this.template(attributes)

		@clip = new ZeroClipboard( this.$('a'),
		  moviePath: "bower_components/zeroclipboard/ZeroClipboard.swf"
		  forceHandCursor: true
		)

		@clip.on "dataRequested", (client, args) ->
		  client.setText args.text

		@clip.on 'mousedown', (client, args)->
			that.clipmousedown()

		return this

	imgClick: (e)->
    e.preventDefault()
    alert 'Please install flash for copy the link'

  clipmousedown: ->
  	new web.Views.AlertView(
  		alert: 'info'
  		fixed: true
  		title: 'Copied!!'
  		message: 'pasted to clipboard'
  	).flash()
