var Thumb = Backbone.Model.extend({
  defaults: {
    uri: '',
    state: '',
    thumb: ''
  },
  select: function(state){
    this.set({'state': state ? 'selected' : ''});
  }
});
