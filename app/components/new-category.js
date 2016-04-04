import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryForm: false,
  actions: {
      showNewCategoryForm() {
      this.set('newCategoryForm', true);
    },
      save() {
        var params = {
          title: this.get('title')
        };
        this.set('newCategoryForm', false);
        this.sendAction('save', params)
      }
  }
});
