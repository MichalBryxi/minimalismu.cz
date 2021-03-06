import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Em.RSVP.hash({
      donations: this.store.find('donation'),
      goals: this.store.find('goal')
    });
  }
});
