Template.messages.helpers({
    //add you helpers here
});

Template.messages.events({
    //add your events here
});

Template.messages.onCreated(function () {
    //add your statement here
});

Template.messages.onRendered(function () {
    //add your statement here
});

Template.messages.onDestroyed(function () {
    //add your statement here
});

Template.messages.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
};

Template.messages.destroyed = function(){

    // Remove special class for background color
    $('body').removeClass('light-navbar');
};