(function() {
  window.web = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      'use strict';
      console.log('Hello from Backbone!');
      this.clipboard = new this.Views.ClipboardView();
      this.WebRouter = new this.Routers.WebRouter();
      Backbone.history.start({
        pushState: true
      });
      return $(document).on("click", "a:not([data-bypass])", function(evt) {
        var href, root;
        href = {
          prop: $(this).prop("href"),
          attr: $(this).attr("href")
        };
        root = location.protocol + "//" + location.host;
        if (href.prop && href.prop.slice(0, root.length) === root) {
          evt.preventDefault();
          return Backbone.history.navigate(href.attr, true);
        }
      });
    }
  };

  $(function() {
    'use strict';
    web.domain = 'http://stallket.com/';
    return web.init();
  });

}).call(this);
