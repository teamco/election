Template.volunteers.helpers({
    volunteers: function () {
        return Accounts.users.find().fetch();
    }
});

Meteor.subscribe("myVolunteers");


Template.volunteers.events({
    //add your events here
});

Template.volunteers.onCreated(function () {
    //add your statement here
});

Template.volunteers.onRendered(function () {
    //add your statement here
});

Template.volunteers.onDestroyed(function () {
    //add your statement here
});

