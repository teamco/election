Template.repository.helpers({
    //add you helpers here
});

Template.repository.events({
    'click #uploadFile': function () {
        Router.go('/repository/new');
    }
});

Template.repository.onCreated(function () {
    //add your statement here
});

Template.repository.onRendered(function () {
    //add your statement here
});

Template.repository.onDestroyed(function () {
    //add your statement here
});
