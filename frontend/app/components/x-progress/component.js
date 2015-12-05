import Ember from 'ember';

export default Ember.Component.extend({
  previousGoals: function () {
    var currentGoalOrder = this.get('goal.order');

    return this.get('goals').filter(function (item, index, enumerable) {
      return currentGoalOrder > item.get('order');
    });
  }.property('goals.@each.order', 'goal'),

  previousGoalsSum: function () {
    return this.get('previousGoals').reduce(function (prevVal, item) {
      return (prevVal || 0) + item.get('amount');
    }, 0);
  }.property('previousGoals.@each.amount'),

  percent: function () {
    var donatedInCurrent = this.get('donationsSum') - this.get('previousGoalsSum'),
        amountInCurrent = this.get('goal.amount');
    if (donatedInCurrent > amountInCurrent) {
      return 100;
    } else if (donatedInCurrent < 0) {
      return 0;
    } else {
      return (donatedInCurrent / amountInCurrent * 100).toFixed(0);
    }
  }.property('previousGoalsSum', 'donationsSum', 'goal.amount'),

  type: function () {
    if (this.get('percent') < 100) {
      return 'progress-bar-warning';
    } else {
      return 'progress-bar-success';
    }
  }.property('percent')
});
