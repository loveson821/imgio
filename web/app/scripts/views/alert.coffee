'use strict';

class web.Views.AlertView extends Backbone.View

  tagName: "div"
  
  className: "alert fade"
  
  template: _.template(["<a href=\"#\" data-dismiss=\"alert\" class=\"close\">&times;</a>", "<strong><%= title %></strong>", "<%= message %>"].join("\n"))
  
  initialize: (options) ->
    if options
      @alert = options.alert or "info"
      @title = options.title or ""
      @message = options.message or ""
      @fixed = options.fixed or false

  prepare: ->
    that = this
    output = @template(
      title: @title
      message: @message
    )

    @$el.addClass 'alert-' + @alert if @alert
    @$el.addClass "fixed"  if @fixed
    @$el.append output

    $('body').append that.$el

  render: ->
    @prepare()
    window.setTimeout (->
      @$el.addClass "in"
    ), 20
    this

  remove: ->
    that = this
    @$el.removeClass "in"
    window.setTimeout (->
      that.$el.remove()
    ), 1000

  flash: ->
    @prepare()
    that = this
    @$el.delay(1000).addClass("in").fadeOut(4000)

