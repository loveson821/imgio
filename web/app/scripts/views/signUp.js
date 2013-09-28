(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.SignupView = (function(_super) {
    var alertTemplate, self;

    __extends(SignupView, _super);

    function SignupView() {
      _ref = SignupView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    self = SignupView;

    SignupView.prototype.template = JST['app/scripts/templates/signUp.ejs'];

    alertTemplate = _.template("<div class=\"alert alert-danger\"><%= name %>!! <%= type %></div>");

    SignupView.prototype.initialize = function() {
      this.model.on('validation-alert', this.addAlertBlock, this);
      this.model.on('signin-success', this.signInCallback, this);
      return this.model.on('logout', this.logoutCallback, this);
    };

    SignupView.prototype.events = {
      submit: 'regist'
    };

    SignupView.prototype.render = function() {
      this.$el.html(this.template());
      return this;
    };

    SignupView.prototype.regist = function(e) {
      var creds;
      e.preventDefault();
      creds = {};
      creds.email = this.$('input#email').val();
      creds.password = this.$('input#password').val();
      creds.username = this.$('input#username').val();
      return this.model.signup(creds);
    };

    SignupView.prototype.addAlertBlock = function(key, type) {
      return this.$el.prepend(alertTemplate({
        name: key,
        type: type
      }));
    };

    SignupView.prototype.signInCallback = function(user) {
      return this.$el.hide();
    };

    SignupView.prototype.logoutCallback = function() {
      this.render();
      return this.$el.show();
    };

    return SignupView;

  })(Backbone.View);

}).call(this);
