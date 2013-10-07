(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.SidebarView = (function(_super) {
    __extends(SidebarView, _super);

    function SidebarView() {
      _ref = SidebarView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SidebarView.prototype.template = JST['app/scripts/templates/sidebar.ejs'];

    SidebarView.prototype.events = {
      'click .icon-search': 'loadSearchPage',
      'click .icon-logo': 'loadHomePage',
      'click .icon-heart': 'loadHotestPage',
      'click .icon-rocket': 'loadRecentPage',
      submit: 'shareImage'
    };

    SidebarView.prototype.initialize = function() {
      this.ptButton = $('#pt-button');
      if (!this.ptButton) {
        console.log('no pt-button');
      }
      return this.pictureModel = null;
    };

    SidebarView.prototype.render = function() {
      this.$el.html(this.template());
      return $("[rel='tooltip']").tooltip();
    };

    SidebarView.prototype.selectMenuItem = function(menuItem) {
      $("[rel='tooltip']").removeClass("active");
      if (menuItem) {
        return $("." + menuItem).addClass("active");
      }
    };

    SidebarView.prototype.loadSearchPage = function(e) {
      e.preventDefault();
      this.ptButton.trigger('click', ['search']);
      this.selectMenuItem('icon-search');
      web.WebRouter.clean();
      return $('input#searchInput').focus();
    };

    SidebarView.prototype.loadHomePage = function(e) {
      e.preventDefault();
      this.ptButton.trigger('click', ['home']);
      return web.WebRouter.clean();
    };

    SidebarView.prototype.loadRecentPage = function(e) {
      e.preventDefault();
      this.ptButton.trigger('click', ['recent']);
      this.selectMenuItem('icon-rocket');
      return web.WebRouter.clean();
    };

    SidebarView.prototype.loadHotestPage = function(e) {
      e.preventDefault();
      this.ptButton.trigger('click', ['hotest']);
      this.selectMenuItem('icon-heart');
      return web.WebRouter.clean();
    };

    SidebarView.prototype.shareImage = function(e) {
      var body;
      e.preventDefault();
      console.log(this.model.auth());
      if (!this.model.auth()) {
        $('#shareModal').modal('hide');
        return new web.Views.AlertView({
          alert: 'danger',
          fixed: true,
          title: '!!',
          message: 'Please login first'
        }).flash();
      } else {
        body = {};
        body.path = $("#shareImageURL").val();
        body.name = $('#shareImageName').val();
        if (!this.pictureModel) {
          this.pictureModel = new web.Models.PictureModel;
        }
        return this.pictureModel.save(body, {
          success: function(model, response, options) {
            $('#shareModal').modal('hide');
            return new web.Views.AlertView({
              alert: 'success',
              fixed: true,
              title: '!!',
              message: 'Shared image ' + body.name
            }).flash();
          }
        });
      }
    };

    return SidebarView;

  })(Backbone.View);

}).call(this);
