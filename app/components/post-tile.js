import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['date:desc'],
    sortPostsAsc: Ember.computed.sort('posts', 'sortBy')
});
