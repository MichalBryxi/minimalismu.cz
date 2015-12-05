import Ember from 'ember';

export default Ember.Controller.extend({
  donationsSum: function () {
    return this.get('model.donations').reduce(function (prevVal, item) {
      return (prevVal || 0) + item.get('amount');
    });
  }.property('model.donations.@each.amount')
});
