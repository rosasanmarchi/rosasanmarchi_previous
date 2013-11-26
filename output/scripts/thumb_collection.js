var Thumbs = Backbone.Collection.extend({
  model: Thumb,
  fetch: function() {
    return _.map(urls, function(url) { 
      return new Thumb({uri: url})
    });
  },
  select: function(model) {
    if( this.selectedThumb() ) {
      this.selectedThumb().select(false);
    };
    this.selected = model;
    this.selected.select(true);
    this.trigger('thumbs:selected');
  },
  selectedThumb: function() {
    return this.selected;
  }
});

var thumbs = new Thumbs;
