import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route( 'gettingstarted' );
    this.route( 'simple' );
    this.route( 'query_params' );
    this.route( 'controller_per_item' );
});

export default Router;
