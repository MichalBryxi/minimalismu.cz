import Ember from 'ember';

export default Ember.Component.extend({
  previousGoals: function () {
    var currentGoalOrder = this.get('goal.order');

    return this.get('goals').filter(function (item, index, enumerable) {
      return currentGoalOrder > item.get('order');
    });
  }.property('goals.[]', 'goal'),

  previousGoalsSum: function () {
    return this.get('previousGoals').reduce(function (prevVal, item) {
      return (prevVal || 0) + item.get('amount');
    }, 0);
  }.property('previousGoals.[]'),

  width: function () {
    var donatedInCurrent = this.get('donationsSum') - this.get('previousGoalsSum'),
        amountInCurrent = this.get('goal.amount');
    if (donatedInCurrent > amountInCurrent) {
      return 100;
    } else {
      return donatedInCurrent / amountInCurrent * 100;
    }
  }.property('previousGoalsSum', 'donationsSum', 'goal.amount')
});
