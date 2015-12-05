import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
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
  
  this.route('progress');
});

export default Router;
