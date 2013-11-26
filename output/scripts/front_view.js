var FrontView = Backbone.View.extend({
  template:  _.template('<img src="<%= uri %>" />'),
  el: $('#front'),

  initialize: function() {
    this.model.bind('thumbs:selected', this.render, this);
  },

  render: function() {
    $(this.el).html(this.template(this.model.selectedThumb().toJSON()));
  }
});

var frontview = new FrontView({ model: thumbs });
