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
            self.trigger 'validation-alert', k, v.type
        else
          self.setUserInfo data.user
          self.trigger 'signup-success'


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

  logout: ->
    self = this
    $.ajax '/users/session',
      type: 'DELETE'
      success: (data, textStatus, jqXHR)->

        $.removeCookie 'user_info'
        self.set user: null
        self.trigger 'logout'

  setUserInfo: (user_info)->
    $.cookie 'user_info', user_info
    @load()

  load: ->
    @set user: $.cookie('user_info')

  auth: ->
    return yes if @get('user')
    no

  isAdmin: ->
    return yes if @get('user') and @get('user').role == 'admin'
    no

  