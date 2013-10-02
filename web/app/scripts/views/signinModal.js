(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.SigninmodalView = (function(_super) {
    __extends(SigninmodalView, _super);

    function SigninmodalView() {
      _ref = SigninmodalView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SigninmodalView.prototype.template = JST['app/scripts/templates/signinModal.ejs'];

    SigninmodalView.prototype.events = {
      submit: 'signIn'
    };

    SigninmodalView.prototype.render = function() {
      return this.$el.html(this.template());
    };

    SigninmodalView.prototype.signIn = function(e) {
      var creds;
      e.preventDefault();
      creds = {};
      creds.email = $("#signIn-form input[type='email']").val();
      creds.password = $("#signIn-form input[type='password']").val();
      return this.model.signin(creds);
    };

    return SigninmodalView;

  })(Backbone.View);

}).call(this);
