var ThumbView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<img src="<%= uri %>" class="thumbnail <%= state %>" />'),
  events: {
    "click" : "selectThumb"
  },
  initialize: function() {
    this.model.bind('change',this.render, this);
  },
  render: function() {
    console.log('rendering');
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  selectThumb: function() {
    thumbs.select(this.model);
  }
});
