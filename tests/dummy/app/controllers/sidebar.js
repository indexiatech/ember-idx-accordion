import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: [
    {route: 'gettingstarted', text: 'Getting Started'},
    {route: 'simple', text: 'Simple'},
    {route: 'query_params', text: 'Query Params'},
    {route: 'controller_per_item', text: 'Controller Per Item'}
  ]
});