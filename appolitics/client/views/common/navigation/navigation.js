Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

Template.navigation.helpers({

    isSelected: function() {
        debugger
    },

    name: function() {
       return Meteor.user().profile.name;
     },

    picture: function() {
          return Meteor.user().profile.picture;
    }

});