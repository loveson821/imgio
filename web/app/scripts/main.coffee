window.web =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'
    console.log 'Hello from Backbone!'

    @clipboard = new @Views.ClipboardView()

    @WebRouter = new @Routers.WebRouter()
    # WebRouter.start()
    Backbone.history.start pushState: true

    $(document).on "click", "a:not([data-bypass])", (evt) ->
      
      href =
        prop: $(this).prop("href")
        attr: $(this).attr("href")

      root = location.protocol + "//" + location.host
      if href.prop and href.prop.slice(0, root.length) is root
        evt.preventDefault()
        Backbone.history.navigate href.attr, true

    
    

$ ->
  'use strict'
  web.domain = 'http://stallket.com/'
  web.init();
