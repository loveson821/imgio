'use strict';

class web.Views.ClipboardView extends Backbone.View
	template: JST['app/scripts/templates/clipboard.ejs']
	el: $('#clipboard')

	render: ->	
		that = this
		attributes = this.model.toJSON()
		this.$el.html this.template(attributes)
		
		# Short Link
		@clip = new ZeroClipboard( $('#a-short-link'),
		  moviePath: "scripts/ZeroClipboard.swf"
		)

		@clip.on "dataRequested", (client, args) ->
		  client.setText args.text

		@clip.on 'mousedown', (client, args)->
			that.close()

		@clip.on 'mouseover', (client, args)->
			$(this).find('.copy-overlay').css('opacity','1')

		@clip.on 'mouseout', (client, args)->
			$(this).find('.copy-overlay').css('opacity','0')


		# Blog Fourm 
		@clip1 = new ZeroClipboard( $('#a-blog-fourm'),
		  moviePath: "scripts/ZeroClipboard.swf"
		)

		# Html Tag
		@clip2 = new ZeroClipboard( $('#a-html-tag'),
		  moviePath: "scripts/ZeroClipboard.swf"
		)


	setModel: (model)->
		this.model = model

	show: ->
		@render()
		# @$el.show()
		$("#clipboardModal").modal 'show'
		# @render()
	close: ->
		$("#clipboardModal").modal 'hide'
		# @$el.hide()