import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  deletePost(post) {
    if (confirm('delete post?')) {
      this.sendAction('deletePost', post);
      }
    }
  }
});
