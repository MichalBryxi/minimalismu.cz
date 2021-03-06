import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  order: DS.attr('number'),
  icon: DS.attr('string')
});
