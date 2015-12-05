import Ember from 'ember';

export default Ember.Controller.extend({
  donationsSum: function () {
    return this.get('model.donations').reduce(function (prevVal, item) {
      console.log(item.get('amount'));
      return (prevVal || 0) + item.get('amount');
    });
  }.property('model.donations.@each.amount')
});
