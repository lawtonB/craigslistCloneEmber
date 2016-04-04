import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  posts: DS.hasMany('post', {async:true })
});
