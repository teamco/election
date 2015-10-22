Meteor.startup(function() {
  if(Accounts.find().count() === 0) {
    var accounts = [
      {
        'name': 'account 1'
      },
      {
        'name': 'account 2'
      }
    ];
    accounts.forEach(function(account) {
      Accounts.insert(account);
    });
  }
});