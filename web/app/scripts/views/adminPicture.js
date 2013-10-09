(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Views.AdminpictureView = (function(_super) {
    __extends(AdminpictureView, _super);

    function AdminpictureView() {
      _ref = AdminpictureView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AdminpictureView.prototype.tagName = 'li';

    AdminpictureView.prototype.template = JST['app/scripts/templates/adminPicture.ejs'];

    AdminpictureView.prototype.events = {
      'click .btn-info': 'save',
      'click .btn-danger': 'delete',
      'change input': 'inputchange'
    };

    AdminpictureView.prototype.render = function() {
      var attributes, that;
      that = this;
      attributes = this.model.toJSON();
      this.$el.html(this.template({
        pic: attributes
      }));
      return this;
    };

    AdminpictureView.prototype.inputchange = function(e) {
      var name, val;
      name = $(e.target).attr('name');
      val = $(e.target).val();
      return this.model.set(name, val);
    };

    AdminpictureView.prototype.save = function(e) {
      e.preventDefault();
      console.log(this.model);
      return this.model.save({}, {
        success: function(model, response) {
          return alert('success');
        },
        error: function(model, response) {
          alert('failed');
          return console.log(response);
        }
      });
    };

    AdminpictureView.prototype["delete"] = function(e) {
      var r, self;
      e.preventDefault();
      self = this;
      r = confirm("認真要 DEL!?!?");
      if (r === true) {
        return this.model.destroy({
          success: function(model, response) {
            return self.el.remove();
          },
          error: function(model, response) {
            return alert('failed');
          }
        });
      }
    };

    return AdminpictureView;

  })(Backbone.View);

}).call(this);
