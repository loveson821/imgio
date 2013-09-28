'use strict';

class web.Collections.PictureCollection extends Backbone.Collection
  model: web.Models.PictureModel

  initialize: (models, options) ->
  	@page = 1
  	@count = 10
  	
  parse: (response)->
  	response

  loadMore: ->
  	@page = @page + 1
  	@fetch reset: yes, data:
  		page: @page
