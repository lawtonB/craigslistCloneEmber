import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(category) {
      if (confirm("delete category?")){
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
