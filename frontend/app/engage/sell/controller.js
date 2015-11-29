import Ember from 'ember';

export default Ember.Controller.extend({
  copied: false,

  actions: {
    copySuccess: function () {
      this.set('copied', true);
    }
  }
});
