Meteor.startup(function () {

    if (!ActiveMenu.find().fetch().length) {
        ActiveMenu.insert({text: 'Page one', path: 'pageOne'});
        ActiveMenu.insert({text: 'Page two', path: 'pageTwo'});
    }
});