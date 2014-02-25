var ThumbView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<img src="<%= thumb %>" class="thumbnail <%= state %>" />'),
  events: {
    "click" : "selectThumb"
  },
  initialize: function() {
    this.model.bind('change',this.render, this);
  },
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  selectThumb: function() {
    thumbs.select(this.model);
  }
});
