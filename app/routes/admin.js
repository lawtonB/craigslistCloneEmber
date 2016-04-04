import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    },
    destroyCategory(category) {
      if(confirm("Hit 'OK' to delete this category")){
        category.destroyRecord();
      }
    }
  }
});
