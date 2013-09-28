(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Models.SessionModel = (function(_super) {
    __extends(SessionModel, _super);

    function SessionModel() {
      _ref = SessionModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SessionModel.prototype.urlRoot = '/users';

    SessionModel.prototype.defaults = {
      user: null
    };

    SessionModel.prototype.initialize = function() {
      $.cookie.json = true;
      return this.load();
    };

    SessionModel.prototype.signup = function(creds) {
      var self;
      self = this;
      return this.save(creds, {
        success: function(model, response, options) {
          var k, v, _ref1, _results;
          if (response.errors != null) {
            _ref1 = response.errors;
            _results = [];
            for (k in _ref1) {
              v = _ref1[k];
              _results.push(self.trigger('validation-alert', k, v.type));
            }
            return _results;
          } else {
            self.setUserInfo(data.user);
            return self.trigger('signup-success');
          }
        }
      });
    };

    SessionModel.prototype.signin = function(creds) {
      var self;
      self = this;
      return $.ajax('/users/session', {
        type: 'POST',
        data: creds,
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          if (data.errors != null) {
            return self.trigger('signin-alert', data.errors);
          } else {
            self.setUserInfo(data.user);
            return self.trigger('signin-success', data.user);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return self.trigger('signin-alert', jqXHR, errorThrown);
        }
      });
    };

    SessionModel.prototype.setUserInfo = function(user_info) {
      $.cookie('user_info', user_info);
      return this.load();
    };

    SessionModel.prototype.load = function() {
      return this.set({
        user: $.cookie('user_info')
      });
    };

    SessionModel.prototype.auth = function() {
      if (this.get('user')) {
        return true;
      }
      return false;
    };

    SessionModel.prototype.logout = function() {
      $.removeCookie('user_info');
      this.set({
        user: null
      });
      return this.trigger('logout');
    };

    return SessionModel;

  })(Backbone.Model);

}).call(this);
