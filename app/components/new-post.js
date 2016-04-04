import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    showNewPostForm() {
      this.set('newPostForm', true);
    },
    savePost(){
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category')
      };
      this.set('newPostForm', false);
      this.sendAction('savePost', params);
    }
  }
});
