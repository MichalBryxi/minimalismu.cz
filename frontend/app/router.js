import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('contact');
  
  this.route('engage', function() {
    this.route('find');
    this.route('sell');
    this.route('give');
  });
});

export default Router;
