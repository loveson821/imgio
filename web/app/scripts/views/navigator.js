(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.NavigatorView = (function(_super) {
    var alertTemplate;

    __extends(NavigatorView, _super);

    function NavigatorView() {
      _ref = NavigatorView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NavigatorView.prototype.template = JST['app/scripts/templates/navigator.ejs'];

    alertTemplate = _.template("<div class=\"alert alert-danger\"><%= name %>!! <%= type %></div>");

    NavigatorView.prototype.initialize = function() {
      this.model.on('signin-alert', this.addAlertBlock, this);
      this.model.on('signin-success', this.signInCallback, this);
      return this.model.on('logout', this.render, this);
    };

    NavigatorView.prototype.events = {
      submit: 'signIn',
      'click a#logout': 'logout'
    };

    NavigatorView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    NavigatorView.prototype.signIn = function(e) {
      var creds;
      e.preventDefault();
      creds = {};
      creds.email = $("#signIn-form input[type='email']").val();
      creds.password = $("#signIn-form input[type='password']").val();
      return this.model.signin(creds);
    };

    NavigatorView.prototype.addAlertBlock = function(key, type) {
      return $('#SignInModal').prepend(alertTemplate({
        name: key,
        type: type
      }));
    };

    NavigatorView.prototype.signInCallback = function(user) {
      $('#SignInModal').modal('hide');
      return window.location.reload();
    };

    NavigatorView.prototype.logout = function(e) {
      e.preventDefault();
      return this.model.logout();
    };

    NavigatorView.prototype.selectMenuItem = function(menuItem) {
      $(".nav li").removeClass("active");
      if (menuItem) {
        return $("." + menuItem).addClass("active");
      }
    };

    return NavigatorView;

  })(Backbone.View);

}).call(this);
