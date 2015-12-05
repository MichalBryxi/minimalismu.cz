import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  accountName: DS.attr('string'),
  message: DS.attr('string'),
  amount: DS.attr('number')
});
