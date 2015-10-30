Template.activeMenu.helpers({

    currentMenu: function() {
        return ActiveMenu.find().fetch();
    }

});

Meteor.subscribe("activeMenuByRoles");