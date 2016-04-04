import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    destroyCategory(category) {
      if(confirm("Hit 'OK' to delete this category")){
        category.destroyRecord();
      }
    }
  }
});
