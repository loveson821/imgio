(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  web.Collections.SearchCollection = (function(_super) {
    __extends(SearchCollection, _super);

    function SearchCollection() {
      _ref = SearchCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SearchCollection.prototype.model = web.Models.PictureModel;

    SearchCollection.prototype.initialize = function(models, options) {
      return this.searchOption;
    };

    SearchCollection.prototype.parse = function(response) {
      return response.docs;
    };

    SearchCollection.prototype.loadMore = function() {
      this.searchOption.page += 1;
      return this.fetch({
        reset: true,
        data: this.searchOption
      });
    };

    SearchCollection.prototype.findWord = function(word) {
      this.setOptions(1, 50, word);
      return this.fetch({
        reset: true,
        data: this.searchOption
      });
    };

    SearchCollection.prototype.setOptions = function(page, count, word) {
      return this.searchOption = {
        page: page,
        count: count,
        word: word
      };
    };

    return SearchCollection;

  })(Backbone.Collection);

}).call(this);
