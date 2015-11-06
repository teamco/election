Template.event.helpers({
    //add you helpers here
});

Template.event.events({
    'click #eventInfo': function () {
         Router.go('/eventView/Info');
     }
});

Template.event.onCreated(function () {
    //add your statement here
});

Template.event.onRendered(function () {
    //add your statement here
});

Template.event.onDestroyed(function () {
    //add your statement here
});

