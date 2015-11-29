import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    didTransition: function() {
      this._super();
      console.log('fooo');
      window.scrollTo(0,0);
    }
  }
});
