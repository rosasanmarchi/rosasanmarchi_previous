var AppView = Backbone.View.extend({
  el: $('#gallery-container'),
  render: function() {
    _.each( new Thumbs().fetch(), function(thumb) {
        $('div ul#thumbnails').append( new ThumbView({ model: thumb }).render().el)
      });
    $('#thumbnails').children()[0].click();
  }
});
