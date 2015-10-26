'use strict';

Meteor.publish('accounts', function (options, searchString) {
    var where = {
        'name': {
            '$regex': '.*' + (searchString || '') + '.*',
            '$options': 'i'
        }
    };
    Counts.publish(this, 'numberOfAccounts', Accounts.find(where), {noReady: true});
    return Accounts.find(where, options);
});
