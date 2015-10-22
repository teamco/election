Accounts = new Mongo.Collection('accounts');

Accounts.allow({
  insert: function(userId, account) {
    return true;
  },
  update: function(userId, account, fields, modifier) {
    return true;
  },
  remove: function(userId, account) {
    return true;
  }
});