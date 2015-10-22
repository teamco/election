LeftMenu = new Mongo.Collection('leftMenu');

LeftMenu.allow({
  insert: function(userId, leftMenu) {
    return userId;
  },
  update: function(userId, leftMenu, fields, modifier) {
    return userId;
  },
  remove: function(userId, leftMenu) {
    return userId;
  }
});