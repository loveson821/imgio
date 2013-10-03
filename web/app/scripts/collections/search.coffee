'use strict';

class web.Collections.SearchCollection extends Backbone.Collection
  model: web.Models.PictureModel

  initialize: (models, options) ->
  	@searchOption
  	
  parse: (response)->
  	response.docs

  loadMore: ->
  	@searchOption.page += 1
  	@fetch reset: yes, data:
  		@searchOption

  findWord: (word)->
  	@setOptions 1, 50, word
  	@fetch reset: yes, data:
  		@searchOption

  setOptions: (page, count, word)->
  	@searchOption = 
  		page : page
  		count : count
  		word : word