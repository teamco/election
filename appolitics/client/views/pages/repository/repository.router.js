Router.route('/repository', function () {
    this.render('repository');
});

Router.route('/repository/new', function () {
    this.render('uploadFile');
});

Router.route('/profile',{
    waitOn: function () {
        return Meteor.subscribe('images')
    },
    action: function () {
        if (this.ready())
            this.render('Profile');
        else
            this.render('Loading');
    }
});
