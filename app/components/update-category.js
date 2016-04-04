import Ember from 'ember';

export default Ember.Component.extend({
  updateCategoryForm: false,
  actions: {
    updateCategoryFormShow() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        title: this.get('title')
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});
