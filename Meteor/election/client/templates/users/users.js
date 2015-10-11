Meteor.subscribe("userData");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.users.helpers({
        users: Meteor.users.find().fetch()
    });
}

Router.route('/users', function () {

    this.render('users');

}, {name: 'users'});