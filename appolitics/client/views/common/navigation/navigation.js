Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    }

});

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

Router.route('/search', function () {
    this.render('search');
});
