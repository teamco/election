Router.route('/groups', function () {
    this.render('groups');
});

Router.route('/groups/views', function () {
    this.render('groupDetail');
}, {name: 'groups.views'});