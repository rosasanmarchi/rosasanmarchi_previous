var Thumb = Backbone.Model.extend({
  defaults: {
    uri: '',
    state: ''
  },
  select: function(state){
    this.set({'state': state ? 'selected' : ''});
  }
});
