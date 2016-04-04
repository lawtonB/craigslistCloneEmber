import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['date:asc'],
    sortPostsAsc: Ember.computed.sort('posts', 'sortBy')
});
