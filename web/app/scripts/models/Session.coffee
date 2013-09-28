'use strict';

class web.Models.SessionModel extends Backbone.Model
  urlRoot: '/users'

  defaults:
    user: null

  initialize: ->
    $.cookie.json = true
    @load()

  signup: (creds)->
    self = this
    # Do a POST to /session and send the serialized form creds
    @save creds,
      success: (model, response, options)->
        if response.errors?
          for k, v of response.errors
            # console.log k, v.type
            self.trigger 'validation-alert', k, v.type
        else
          self.setUserInfo data.user
          self.trigger 'signup-success'
        # if response.errors != 'undefined'
        # for k,v of response.errors
        #   trigger 'validation-alert', k, v.type
        # else
        #   alert 'success'

  signin: (creds)->
    self = this
    $.ajax '/users/session',
      type: 'POST'
      data: creds
      dataType: 'json'
      success: (data, textStatus, jqXHR) ->
        if data.errors?
          self.trigger 'signin-alert', data.errors
        else
          self.setUserInfo data.user
          self.trigger 'signin-success', data.user

      error: (jqXHR, textStatus, errorThrown) ->
        self.trigger 'signin-alert', jqXHR, errorThrown

  setUserInfo: (user_info)->

    $.cookie 'user_info', user_info
    @load()

  load: ->

    @set user: $.cookie('user_info')
    # c = $.cookie('user_info')
    # console.log typeof(c)
    # console.log @user

  auth: ->
    return yes if @get('user')
    no

  logout: ->
    $.removeCookie 'user_info'
    @set user: null
    @trigger 'logout'