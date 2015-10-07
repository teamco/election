Account = new Mongo.Collection('accounts');

Meteor.methods({
    account: function() {
        return {
            create: function (opts) {

                Account.insert({
                    email: opts.email
                });

                return Account.findOne({email: opts.email});
            },
            update: function () {

            },
            destroy: function () {

            }
        }
    }
});