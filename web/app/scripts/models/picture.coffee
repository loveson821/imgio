'use strict';

class web.Models.PictureModel extends Backbone.Model
	urlRoot: '/api/picture'
	idAttribute: "_id"

	getBasename: (name)->
		return name.replace(/^.*\/|\.[^.]*$/g, '')

	cutDomain: (data)->
		data.shortlink = @getBasename data.shortlink
		data.permalink = @getBasename data.permalink
		@set shortlink: data.shortlink
		@set permalink: data.permalink
		console.log @toJSON()
		data