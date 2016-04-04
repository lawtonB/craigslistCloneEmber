import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      posts: this.store.findAll('post')
    })
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
    },
    updateCategory(category, params){
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined) {
            category.set(key,params[key]);
          }
        });
        category.save();
        this.transitionTo('admin');
      }
  }
});
